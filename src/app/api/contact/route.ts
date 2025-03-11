import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import * as jwt from 'jsonwebtoken';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, service, message } = body;
    
    // Validate input
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Create new contact message
    const newMessage = await prisma.contactMessage.create({
      data: {
        name,
        email,
        service,
        message,
      },
    });
    
    return NextResponse.json(
      { success: true, message: 'Message sent successfully', id: newMessage.id },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error saving contact message:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    // Verify authentication
    const authHeader = request.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    const token = authHeader.split(' ')[1];
    try {
      jwt.verify(token, process.env.JWT_SECRET || 'bridge-of-sinners-secret-key');
    } catch (err) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }
    
    const messages = await prisma.contactMessage.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    
    return NextResponse.json(messages);
  } catch (error) {
    console.error('Error fetching contact messages:', error);
    return NextResponse.json(
      { error: 'Failed to fetch messages' },
      { status: 500 }
    );
  }
}
