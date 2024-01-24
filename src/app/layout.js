import { Roboto } from "next/font/google";
import "./globals.css";


const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })

export const metadata = {
  title: "Next.js 14 Food order",
  description: "Next.js 14 practice",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={roboto.className}>
        <main className="max-w-4xl mx-auto p-4">
          {children}
          <footer className="border-t p-8 text-center text-gray-500 mt-16">
            &copy; 2023 All rights reserved
          </footer>
        </main>
      </body>
    </html>
  );
}
