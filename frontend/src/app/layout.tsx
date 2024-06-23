import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/home/AppHeader.";
import Footer from "./components/home/AppFooter";
import TempHeader from "./components/home/TempHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nekesli",
  description:
    "Algerian Startup to help algerians find discount opportunities for medical and other fields",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TempHeader />
        {children}
      </body>
    </html>
  );
}
