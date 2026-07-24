import type { Metadata } from "next";
import { Inter, Space_Grotesk, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "M1 | Premium Aviation Ecosystem",
  description: "The Aston Martin of aviation technology. A premium digital aircraft ecosystem experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${caveat.variable} dark`}>
      <body className="antialiased bg-m1-bg text-white selection:bg-m1-silver selection:text-black">
        {children}
      </body>
    </html>
  );
}
