import { NextResponse } from 'next/server';

export function GET(req) {
  return NextResponse.json({
    status: 'ok'
  });
}
