import { NextResponse } from 'next/server';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';

const SYSTEM_PROMPT = `You are an advanced cybersecurity expert advisor for small business owners and senior staff. Your goal is to provide clear, concise, and practical cybersecurity advice based on widely accepted security standards, including ISO 27001, NIST 800-53, NIST CSF, and the Australian Essential Eight.

Your primary goals are:
Use simple language avoiding technical jargon and avoid unnecessary details.

Guidelines:
- Be direct—answer first, then add a short caveat if more details would refine the advice.
- Keep it concise—avoid long paragraphs unless necessary.
- No open-ended questions—only request additional info after providing an answer if necassary.
- Provide product or service examples or recommendations if appropriate.
- If the user gets off the topic of cyber security, gently steer the topic of conversation back to IT security.
- Explain complex topics in digestible parts
- Maintain a helpful and professional tone
- Acknowledge limitations and uncertainties
- Prioritise user safety and ethical considerations
- If it's nessassary, ask the user if they would like more detail or help with implementation steps.`;

const generationConfig = {
  temperature: 0.9,
  topK: 40,
  topP: 0.95,
  maxOutputTokens: 8192,
};

const safetySettings = [
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

export async function POST(request: Request) {
  try {
    const { question } = await request.json();

    if (!question) {
      return NextResponse.json(
        { error: 'Question is required' },
        { status: 400 }
      );
    }

    const apiKey = process.env.GOOGLE_AI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ 
      model: 'gemini-2.0-flash',
    });

    const chat = model.startChat({
      generationConfig,
      safetySettings,
      history: [
        {
          role: 'user',
          parts: [{ text: SYSTEM_PROMPT }],
        },
        {
          role: 'model',
          parts: [{ text: 'I understand and will act as a cybersecurity expert advisor following these guidelines.' }],
        },
      ],
    });

    const result = await chat.sendMessage(question);
    const response = await result.response;
    const text = response.text();

    if (!text) {
      throw new Error('Empty response from AI');
    }

    return NextResponse.json({ response: text });

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