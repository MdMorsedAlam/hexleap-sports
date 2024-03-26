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
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <NextProvider> {children}</NextProvider>
      </body>
    </html>
  );
}
