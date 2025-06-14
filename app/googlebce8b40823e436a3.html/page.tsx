export const dynamic = 'force-static';

export async function GET() {
  return new Response("google-site-verification: googlebce8b40823e436a3.html", {
    headers: {
      'Content-Type': 'text/html',
    },
  });
}