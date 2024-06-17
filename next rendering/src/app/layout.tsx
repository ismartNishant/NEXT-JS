
import "./globals.css";
import { ThemeModeScript } from "flowbite-react";
import Footer from "@/Components/Footer";
import type { Metadata } from 'next'
import  Header  from "@/Components/Header";


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
        <script src="https://unpkg.com/flowbite@latest/dist/flowbite.min.js"></script>
      </body>
    </html>
  );
}
