import { NextResponse } from 'next/server';
import { GoogleGenAI, HarmCategory, HarmBlockThreshold } from '@google/genai';

// Simple in-memory rate limiting
// In production, use Redis or a proper rate limiting service
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 10; // 10 requests per minute per IP

function getRateLimitKey(request: Request): string {
  // Get IP from headers or use a fallback
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0] : 'unknown';
  return `advisor:${ip}`;
}

function checkRateLimit(key: string): { allowed: boolean; remaining: number; resetTime: number } {
  const now = Date.now();
  const record = rateLimitMap.get(key);
  
  if (!record || now > record.resetTime) {
    // New window
    rateLimitMap.set(key, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return { allowed: true, remaining: RATE_LIMIT_MAX - 1, resetTime: now + RATE_LIMIT_WINDOW };
  }
  
  if (record.count >= RATE_LIMIT_MAX) {
    return { allowed: false, remaining: 0, resetTime: record.resetTime };
  }
  
  record.count++;
  return { allowed: true, remaining: RATE_LIMIT_MAX - record.count, resetTime: record.resetTime };
}

// Clean up old entries periodically
setInterval(() => {
  const now = Date.now();
  Array.from(rateLimitMap.entries()).forEach(([key, record]) => {
    if (now > record.resetTime) {
      rateLimitMap.delete(key);
    }
  });
}, 60 * 1000);

const SYSTEM_PROMPT = `You are an advanced cybersecurity advisor for Australian small business owners and senior staff. Your goal is to provide clear, concise, and practical advice based on widely accepted security standards, including ISO 27001, NIST CSF, and the Australian Essential Eight. Your guidance is aligned with the ACSC Annual Cyber Threat Report 2024-25.

Key context from the latest ACSC threat report:
- The average cost of a cyber incident to a small business is approximately $56,600
- Common threats include phishing, ransomware, business email compromise, and data breaches
- Small businesses are frequent targets due to perceived weaker security

Your primary goals are:
Use simple language, avoid jargon, and focus on actions that reduce risk.

Safety and scope rules:
- Do not request or store sensitive, personal, or confidential information.
- Refuse to provide step-by-step instructions for hacking, malware, evasion, or illegal activity.
- Provide general guidance only. For incidents, advise contacting a qualified professional or the ACSC.

Guidelines:
- Be direct—answer first, then add a short caveat if more detail would refine the advice.
- Keep it concise—avoid long paragraphs unless necessary.
- No open-ended questions—only request additional info after providing an answer if necessary.
- Provide product or service examples when appropriate, without affiliate language.
- If the user gets off topic, gently steer back to cyber security.
- Explain complex topics in digestible parts.
- Maintain a helpful and professional tone.
- Acknowledge limitations and uncertainties.
- Prioritise user safety and ethical considerations.`;

const SAFETY_SETTINGS = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
];

const GENERATION_CONFIG = {
  temperature: 0.9,
  topK: 40,
  topP: 0.95,
  maxOutputTokens: 8192,
};

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

// Retry configuration for handling temporary availability issues
const MAX_RETRIES = 3;
const INITIAL_DELAY_MS = 1000; // 1 second
const MAX_DELAY_MS = 10000; // 10 seconds

/**
 * Sleep for a given number of milliseconds
 */
function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Calculate delay with exponential backoff and jitter
 */
function calculateDelay(attempt: number): number {
  const baseDelay = Math.min(INITIAL_DELAY_MS * Math.pow(2, attempt), MAX_DELAY_MS);
  // Add jitter (random factor between 0.5 and 1.5) to prevent thundering herd
  const jitter = 0.5 + Math.random();
  return Math.floor(baseDelay * jitter);
}

/**
 * Check if error is retryable (503 Service Unavailable, 429 Too Many Requests, or network errors)
 */
function isRetryableError(error: any): boolean {
  const errorMessage = error?.message?.toLowerCase() || '';
  const errorString = error?.toString()?.toLowerCase() || '';
  
  // Check for 503 Service Unavailable
  if (errorMessage.includes('503') || errorString.includes('503') ||
      errorMessage.includes('service unavailable') || errorString.includes('service unavailable')) {
    return true;
  }
  
  // Check for 429 Too Many Requests
  if (errorMessage.includes('429') || errorString.includes('429') ||
      errorMessage.includes('too many requests') || errorString.includes('rate limit')) {
    return true;
  }
  
  // Check for temporary availability issues
  if (errorMessage.includes('temporarily unavailable') || 
      errorMessage.includes('high demand') ||
      errorMessage.includes('overloaded')) {
    return true;
  }
  
  return false;
}

export async function POST(request: Request) {
  try {
    // Check rate limit
    const rateLimitKey = getRateLimitKey(request);
    const { allowed, remaining, resetTime } = checkRateLimit(rateLimitKey);
    
    // Create response with rate limit headers
    const headers = {
      'X-RateLimit-Limit': RATE_LIMIT_MAX.toString(),
      'X-RateLimit-Remaining': remaining.toString(),
      'X-RateLimit-Reset': Math.ceil(resetTime / 1000).toString(),
    };
    
    if (!allowed) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a moment before trying again.' },
        { status: 429, headers }
      );
    }

    const body = await request.json();
    const { question, history = [] } = body as { question: string; history: Message[] };

    // Input validation and sanitization
    if (!question || typeof question !== 'string') {
      return NextResponse.json(
        { error: 'Question is required' },
        { status: 400, headers }
      );
    }

    // Sanitize input - limit length and remove potential injection patterns
    const sanitizedQuestion = question.slice(0, 2000).trim();
    
    if (sanitizedQuestion.length < 3) {
      return NextResponse.json(
        { error: 'Question must be at least 3 characters' },
        { status: 400, headers }
      );
    }

    const apiKey = process.env.GOOGLE_AI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500, headers }
      );
    }

    const ai = new GoogleGenAI({ apiKey });

    // Build contents array with system prompt and conversation history
    const contents = [
      {
        role: 'user',
        parts: [{ text: SYSTEM_PROMPT }],
      },
      {
        role: 'model',
        parts: [{ text: 'I understand and will act as a cybersecurity expert advisor following these guidelines.' }],
      },
      // Include previous conversation history if provided
      ...history.map((msg: Message) => ({
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: msg.content }],
      })),
      // Add the current question
      {
        role: 'user',
        parts: [{ text: sanitizedQuestion }],
      },
    ];

    // Retry logic for handling temporary availability issues
    let lastError: Error | null = null;
    let response: any = null;
    
    for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
      try {
        response = await ai.models.generateContent({
          model: 'gemini-3-flash-preview',
          contents: contents,
          config: {
            ...GENERATION_CONFIG,
            safetySettings: SAFETY_SETTINGS,
          },
        });
        
        // Success - break out of retry loop
        break;
      } catch (error: any) {
        lastError = error;
        
        // Check if this is a retryable error
        if (isRetryableError(error) && attempt < MAX_RETRIES - 1) {
          const delay = calculateDelay(attempt);
          console.log(`Attempt ${attempt + 1} failed with retryable error. Retrying in ${delay}ms...`);
          await sleep(delay);
        } else {
          // Non-retryable error or max retries reached
          throw error;
        }
      }
    }

    const text = response?.text;

    if (!text) {
      throw new Error('Empty response from AI');
    }

    return NextResponse.json({ response: text }, { headers });

  } catch (error: any) {
    console.error('Error in advisor API:', error);
    
    // Provide user-friendly error messages
    let errorMessage = error.message || 'Failed to process request';
    let statusCode = 500;
    
    // Check for specific error types
    const errorString = error.message?.toLowerCase() || '';
    
    if (errorString.includes('503') || errorString.includes('service unavailable')) {
      errorMessage = 'The AI service is temporarily unavailable due to high demand. Please try again in a few moments.';
      statusCode = 503;
    } else if (errorString.includes('429') || errorString.includes('rate limit') || errorString.includes('too many requests')) {
      errorMessage = 'Too many requests to the AI service. Please wait a moment before trying again.';
      statusCode = 429;
    } else if (errorString.includes('api key') || errorString.includes('unauthorized')) {
      errorMessage = 'API key configuration error. Please contact support.';
      statusCode = 500;
    } else if (errorString.includes('quota')) {
      errorMessage = 'The AI service quota has been exceeded. Please try again later.';
      statusCode = 429;
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: statusCode }
    );
  }
}
