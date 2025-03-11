import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import * as jwt from 'jsonwebtoken';

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  // Verify authentication first
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

  try {
    // Get ID from params
    const { id } = await params;

    // Parse request body
    const body = await request.json();

    // Update the message
    const updatedMessage = await prisma.contactMessage.update({
      where: { id },
      data: body,
    });

    return NextResponse.json(updatedMessage);
  } catch (error) {
    console.error('Error updating contact message:', error);
    return NextResponse.json(
      { error: 'Failed to update message' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  // Verify authentication first
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

  try {
    // Get ID from params
    const id = params.id;

    // Delete the message
    await prisma.contactMessage.delete({
      where: { id },
    });

    return NextResponse.json(
      { success: true, message: 'Message deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting contact message:', error);
    return NextResponse.json(
      { error: 'Failed to delete message' },
      { status: 500 }
    );
  }
}
