// This file must have the function name as HTTP verb (get, post, put, delete)

export function GET(request) {
  console.log(request);

  return new Response('hello');
}

export function POST() {}

export function PUT() {}

export function DELETE() {}
