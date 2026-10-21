import type { Metadata } from "next";
import { Playfair_Display, Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: 'swap',
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const poppins = Poppins({
  weight: ["600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "yora | Cellular Reset & Discovery Ritual",
  description: "yora Cordyceps militaris capsules for sustained energy and focus.",
  icons: {
    icon: '/yora-emblem.png',
    apple: '/yora-emblem.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <body className="antialiased selection:bg-accent/20 selection:text-accent" suppressHydrationWarning>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
