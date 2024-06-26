import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextProvider from "@/Provider/NextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home | Sports Hexleap",
  description: "Sports Hexleap",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-300 dark:bg-zinc-900`}>
        <NextProvider> {children}</NextProvider>
      </body>
    </html>
  );
}
