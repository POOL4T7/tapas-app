import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: NextRequest) {
  try {
    const { token } = await request.json();
    const cookieStore = await cookies();

    if (!token) {
      return NextResponse.json({ error: 'No token provided' }, { status: 400 });
    }

    // Correct: use cookies() from next/headers
    cookieStore.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'development',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: '/',
      // domain:
      //   process.env.NODE_ENV === 'production'
      //     ? '103.174.103.132:3000'
      //     : 'localhost:3000',
    });

    return NextResponse.json({ message: 'Cookie set successfully' });
  } catch (error) {
    console.error('Cookie setting error:', error);
    return NextResponse.json(
      { error: 'Failed to set cookie' },
      { status: 500 }
    );
  }
}
