# Gemini Flash 3.0 Preview Migration Plan

## Overview

Migrate the AI Security Advisor from Gemini Flash 2.0 to Gemini Flash 3.0 Preview by switching from the `@google/generative-ai` SDK to the newer `@google/genai` SDK.

## Current Implementation Analysis

### Package
- **Current**: `@google/generative-ai` v0.21.0
- **Target**: `@google/genai` (latest)

### Model
- **Current**: `gemini-2.0-flash`
- **Target**: `gemini-3-flash-preview`

### API Pattern Differences

| Aspect | Current SDK | New SDK |
|--------|-------------|---------|
| Class | `GoogleGenerativeAI` | `GoogleGenAI` |
| Initialization | `new GoogleGenerativeAI(apiKey)` | `new GoogleGenAI({ apiKey })` |
| Model Access | `genAI.getGenerativeModel({ model })` | `ai.models.generateContent({ model, ... })` |
| Chat | `model.startChat({ history })` | Pass history in `contents` array |
| Send Message | `chat.sendMessage(text)` | Include in `contents` |
| Config | Separate `generationConfig` object | Combined in `config` object |
| Safety | `HarmCategory` enum + `HarmBlockThreshold` | String-based category names |

## Implementation Steps

### Step 1: Update package.json

Replace the old package with the new one:

```json
// Remove
"@google/generative-ai": "^0.21.0",

// Add
"@google/genai": "^0.2.0",  // or latest version
```

### Step 2: Update Imports

```typescript
// Current
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';

// New
import { GoogleGenAI } from '@google/genai';
```

### Step 3: Convert Safety Settings

The new SDK uses string-based category names instead of enums:

```typescript
// Current format
const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  // ...
];

// New format
const safetySettings = [
  {
    category: 'HARM_CATEGORY_HARASSMENT',
    threshold: 'BLOCK_MEDIUM_AND_ABOVE',
  },
  {
    category: 'HARM_CATEGORY_HATE_SPEECH',
    threshold: 'BLOCK_MEDIUM_AND_ABOVE',
  },
  {
    category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
    threshold: 'BLOCK_MEDIUM_AND_ABOVE',
  },
  {
    category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
    threshold: 'BLOCK_MEDIUM_AND_ABOVE',
  },
];
```

### Step 4: Convert Generation Config

```typescript
// Current format
const generationConfig = {
  temperature: 0.9,
  topK: 40,
  topP: 0.95,
  maxOutputTokens: 8192,
};

// New format - included in config object
const config = {
  temperature: 0.9,
  topK: 40,
  topP: 0.95,
  maxOutputTokens: 8192,
  safetySettings: safetySettings,
};
```

### Step 5: Implement Chat History Pattern

The new SDK uses a `contents` array for the entire conversation:

```typescript
// Build contents array with system prompt and history
const contents = [
  {
    role: 'user',
    parts: [{ text: SYSTEM_PROMPT }],
  },
  {
    role: 'model',
    parts: [{ text: 'I understand and will act as a cybersecurity expert advisor following these guidelines.' }],
  },
  // ... previous conversation history
  {
    role: 'user',
    parts: [{ text: sanitizedQuestion }],
  },
];

const response = await ai.models.generateContent({
  model: 'gemini-3-flash-preview',
  contents: contents,
  config: config,
});
```

### Step 6: Handle Response

```typescript
// Current
const result = await chat.sendMessage(sanitizedQuestion);
const response = await result.response;
const text = response.text();

// New
const text = response.text;
```

## Complete Rewritten Code

```typescript
import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

// Rate limiting - unchanged
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000;
const RATE_LIMIT_MAX = 10;

function getRateLimitKey(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0] : 'unknown';
  return `advisor:${ip}`;
}

function checkRateLimit(key: string): { allowed: boolean; remaining: number; resetTime: number } {
  const now = Date.now();
  const record = rateLimitMap.get(key);
  
  if (!record || now > record.resetTime) {
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
    category: 'HARM_CATEGORY_HARASSMENT',
    threshold: 'BLOCK_MEDIUM_AND_ABOVE',
  },
  {
    category: 'HARM_CATEGORY_HATE_SPEECH',
    threshold: 'BLOCK_MEDIUM_AND_ABOVE',
  },
  {
    category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
    threshold: 'BLOCK_MEDIUM_AND_ABOVE',
  },
  {
    category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
    threshold: 'BLOCK_MEDIUM_AND_ABOVE',
  },
];

const GENERATION_CONFIG = {
  temperature: 0.9,
  topK: 40,
  topP: 0.95,
  maxOutputTokens: 8192,
};

export async function POST(request: Request) {
  try {
    // Check rate limit
    const rateLimitKey = getRateLimitKey(request);
    const { allowed, remaining, resetTime } = checkRateLimit(rateLimitKey);
    
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
    const { question, history = [] } = body;

    // Input validation
    if (!question || typeof question !== 'string') {
      return NextResponse.json(
        { error: 'Question is required' },
        { status: 400, headers }
      );
    }

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
      ...history.map((msg: { role: string; content: string }) => ({
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: msg.content }],
      })),
      // Add the current question
      {
        role: 'user',
        parts: [{ text: sanitizedQuestion }],
      },
    ];

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: contents,
      config: {
        ...GENERATION_CONFIG,
        safetySettings: SAFETY_SETTINGS,
      },
    });

    const text = response.text;

    if (!text) {
      throw new Error('Empty response from AI');
    }

    return NextResponse.json({ response: text }, { headers });

  } catch (error: any) {
    console.error('Error in advisor API:', error);
    
    return NextResponse.json(
      { 
        error: error.message || 'Failed to process request'
      },
      { status: 500 }
    );
  }
}
```

## Chat History Implementation

### Current State Analysis
The frontend ([`app/advisor/page.tsx`](app/advisor/page.tsx)) already tracks messages in state:
```typescript
const [messages, setMessages] = useState<Message[]>([]);
```

However, it's **NOT sending the history** to the API:
```typescript
body: JSON.stringify({ question: userMessage }),  // No history!
```

The backend uses `startChat` with history, but since Next.js API routes are stateless, the conversation context is lost between requests.

### Solution: Client-Side History (Required)
We need to modify both frontend and backend to properly maintain conversation context:

#### Frontend Changes ([`app/advisor/page.tsx`](app/advisor/page.tsx))
Send the message history with each request:
```typescript
body: JSON.stringify({ 
  question: userMessage,
  history: messages  // Add this
}),
```

#### Backend Changes ([`app/api/advisor/route.ts`](app/api/advisor/route.ts))
Receive and use the history in the contents array:
```typescript
const { question, history = [] } = body;
// ... build contents array with history
```

## Testing Checklist

- [ ] Package installs successfully
- [ ] API key is read correctly from environment
- [ ] Rate limiting still works
- [ ] System prompt is applied correctly
- [ ] Safety settings are enforced
- [ ] Generation config produces expected output quality
- [ ] Error handling works for various failure scenarios
- [ ] Response format matches what the frontend expects

## Rollback Plan

If issues arise, revert by:
1. Restore `@google/generative-ai` in package.json
2. Revert route.ts to original implementation
3. Run `npm install`

## Notes

- The `@google/genai` SDK is newer and may have different stability characteristics
- Gemini 3.0 Flash Preview is a preview model and may have usage limits or different pricing
- Monitor the Google AI documentation for any SDK updates or model changes
