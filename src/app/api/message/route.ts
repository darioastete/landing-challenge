import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({
    received: body,
    message: 'Data received successfully',
  });
}
export async function GET() {
  return NextResponse.json({
    message: 'Hello from GET',
  });
}

