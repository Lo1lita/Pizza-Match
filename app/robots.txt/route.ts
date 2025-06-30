// app/robots.txt/route.ts

import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

export async function GET() {
  const body = `
User-agent: *
Allow: /
Sitemap: https://pizzadangelo-pizza-match.vercel.app/sitemap.xml
  `.trim();

  return new NextResponse(body, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
