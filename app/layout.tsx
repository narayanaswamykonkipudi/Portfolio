import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "NARAYANA SWAMY K | Portfolio",
  description: "Aspiring software engineer and AI/ML practitioner. B.Tech in Artificial Intelligence and Machine Learning at Aditya University.",
  keywords: ["Narayana Swamy", "AI/ML", "Software Engineer", "Portfolio", "Data Science", "Machine Learning"],
  authors: [{ name: "Narayana Swamy K" }],
  creator: "Narayana Swamy K",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://narayanaswamykonkipudi-portfolio.vercel.app",
    title: "NARAYANA SWAMY K | Portfolio",
    description: "Aspiring software engineer and AI/ML practitioner",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}

