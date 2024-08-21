import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sarah Raddi",
  description: "Um pouco da minha história.",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="pt-br">
      <Head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </Head>

      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
