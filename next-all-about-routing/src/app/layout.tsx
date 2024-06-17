
import "./globals.css";
import { ThemeModeScript } from "flowbite-react";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    absolute:"",
    default: "Next js Tuts",
    template:""
  },
  description: "Next js from a to z"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>

      <body >
        <Header />
        <main className="min-h-[600px]">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
