import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zabibu Estate | VQA Grimsby Bench Vintners",
  description: "Artisanal wines from the Grimsby Bench. Experience the tension and elegance of Ontario's finest terroir.",
  // The 'icons' block is removed because Next.js automatically finds src/app/icon.png
  openGraph: {
    title: "Zabibu Estate",
    description: "Artisanal wines from the Grimsby Bench.",
    url: "https://zabibu-winery.vercel.app",
    siteName: "Zabibu Estate",
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}