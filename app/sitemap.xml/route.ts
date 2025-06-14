// app/sitemap.xml/route.ts

import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

export async function GET() {
  const baseUrl = 'https://pizza-match.vercel.app';

  const pages = [
    '', // homepage
    '/ingrediente', // dacă ai pagină cu ingrediente
    '/recomandari', // pagina cu recomandări, dacă există
  ];

  const urls = pages.map((path) => {
    return `
  <url>
    <loc>${baseUrl}${path}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
  });

  const sitemap = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.join('\n')}
</urlset>
`.trim();

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
