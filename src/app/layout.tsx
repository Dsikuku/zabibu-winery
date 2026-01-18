import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair", // Matches the CSS variable above
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Matches the CSS variable above
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zabibu Estate | VQA Grimsby Bench Vintners",
  description: "Artisanal wines from the Grimsby Bench.",
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