import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'robots.txt');
    const robotsContent = fs.readFileSync(filePath, 'utf-8');
    
    return new NextResponse(robotsContent, {
      headers: {
        'Content-Type': 'text/plain',
        'Cache-Control': 'public, max-age=3600, must-revalidate',
      },
    });
  } catch (error) {
    console.error('Error serving robots.txt:', error);
    return NextResponse.json(
      { error: 'Error generating robots.txt' },
      { status: 500 }
    );
  }
}