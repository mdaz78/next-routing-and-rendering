import { NextResponse } from 'next/server';

export function middleware(request) {
  console.log('middleware called');
  return NextResponse.next();
}

export const config = {
  matcher: '/news',
};
