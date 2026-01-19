import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    const { content, title } = await req.json();

    if (!content) {
      return NextResponse.json({ error: 'Content is required' }, { status: 400 });
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

    const prompt = `
      You are an SEO expert. Analyze the following blog post title and content and generate optimized SEO metadata.
      
      Title: ${title}
      Content: ${content.substring(0, 2000)}...
      
      Generate a JSON object with the following fields:
      - meta_title: A compelling, SEO-friendly title (max 60 chars)
      - meta_description: A concise summary that encourages clicks (max 160 chars)
      - meta_keywords: A comma-separated list of 5-8 relevant focus keywords
      - slug: A URL-friendly slug based on the title
      - excerpt: A short summary of the blog (max 200 chars)

      Response must be ONLY valid JSON.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    // Extract JSON from response if Gemini adds markdown formatting
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('Could not parse JSON from AI response');
    }
    
    const metadata = JSON.parse(jsonMatch[0]);

    return NextResponse.json(metadata);
  } catch (error) {
    console.error('Gemini API Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
