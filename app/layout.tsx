import './globals.css'; // Assuming you have global styles


interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-amber-50">
        {/* Header */}
        <header className="bg-gradient-to-r from-amber-600 to-red-600 text-white p-4 shadow-md">
          <div className="container mx-auto flex items-center">

            <h1 className="text-2xl font-bold">PizzaMatch</h1>
          </div>
        </header>

        {/* Main Content (will be populated by page.tsx) */}
        <main className="container mx-auto py-6 px-4">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-4 mt-8">
          <div className="container mx-auto text-center text-sm">
            <p>PizzaMatch - The Traditional Pizza Recommender &copy; {new Date().getFullYear()}</p>
          </div>
        </footer>
      </body>
    </html>
  );
}