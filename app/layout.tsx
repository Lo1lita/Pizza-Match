// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import Image from 'next/image'; // Import the Image component

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: 'Pizza Match – Alege ingrediente și descoperă pizza ideală | Pizza D’Angelo',
  description:
    'Descoperă pizza tradițională perfectă la Pizza D’Angelo! Alege ingredientele preferate, iar Pizza Match îți recomandă cele mai potrivite pizze autentice, exact pe gustul tău. Asortează-ți gustul cu rețeta ideală!',
  keywords:
    'pizza match, recomandare pizza, pizza tradițională, Pizza D’Angelo, pizza italiană, pizza match, pizza recommender, traditional pizza, Pizza D’Angelo, ingredient-based pizza finder, Italian pizza, autentic pizza',
  authors: [{ name: 'Simon Caleb Taloș' }],
  openGraph: {
    title: 'Pizza Match – Găsește Pizza Tradițională Perfectă',
    description:
      'Folosește Pizza Match pentru a alege ingrediente și a primi recomandări reale de pizza delicioasă de la Pizza D’Angelo. Autentic, simplu și personalizat!',
    url: 'https://pizza-match.vercel.app',
    siteName: 'PizzaMatch',
    images: [
      {
        url: '/PerfectMatch.png',
        width: 1200,
        height: 630,
        alt: 'Pizza Match – Găsește Pizza Perfectă',
      },
    ],
    locale: 'ro_RO',
    type: 'website',
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ro">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#f59e0b" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen bg-amber-50 text-gray-900">
        {/* Header */}
        <header className="bg-gradient-to-r from-amber-600 to-red-600 text-white p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center flex-wrap gap-4">
            
            {/* Stânga: logo + titlu */}
            <div className="flex items-center gap-3">
              <Image 
                src="/MatchIcon.png"
                alt="Pizza Match Icon"
                width={40} 
                height={40} 
              />
              <h1 className="text-2xl font-bold tracking-wide">
                PizzaMatch –{' '}
                <a
                  href="https://pizzadangelo.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition duration-300 hover:text-gray-700 hover:underline underline-offset-4"
                >
                  Pizza D&apos;Angelo {/* Escaped apostrophe here */}
                </a>
              </h1>
            </div>

            {/* Dreapta: moto */}
            <div className="flex-1 text-center">
              <p className="text-xl italic font-semibold tracking-wide">
                Asortează-ți gustul cu rețeta ideală!
              </p>
            </div>

          </div>
        </header>
        {/* Conținut Principal */}
        <main className="container mx-auto py-6 px-4">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-4 mt-8">
          <div className="container mx-auto flex justify-between items-center px-4">
            <p className="text-sm">
              <a 
                href="https://pizzadangelo.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 text-sm underline"
              >
                &larr; Înapoi la Pizza D&apos;Angelo {/* Escaped apostrophe here */}
              </a>
            </p>
            <p className="text-sm">PizzaMatch – Cu drag din partea Pizza D&apos;Angelo &copy; {new Date().getFullYear()}</p> {/* Escaped apostrophe here */}
          </div>
        </footer>
      </body>
    </html>
  );
}