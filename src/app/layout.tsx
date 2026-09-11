import type { Metadata } from "next";
import { Inter_Tight, Newsreader } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "touchstone markets",
  description: "Open infrastructure for verifiable markets.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-black">{children}</body>
    </html>
  );
}
