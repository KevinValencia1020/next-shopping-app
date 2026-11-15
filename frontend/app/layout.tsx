import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next Shopping",
  description: "Ecommerce de electrodomésticos y tecnología",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="h-dvh flex flex-col">
        <Header />
        <main className="flex-1 min-h-0 overflow-y-auto flex flex-col">
          {children}
        </main>
        <Navbar />
      </body>
    </html>
  );
}
