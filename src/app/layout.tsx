import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FloatingNav } from "@/components/ui/aceternityUI/floating-navbar";
import { SparklesCore } from "@/components/ui/aceternityUI/sparkles";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Awan Website",
  description: "Where creativity meets technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = [
    {
      name: "Home",
      link: "#Home",
    },
    {
      name: "Tools",
      link: "#Tools",
    },
    {
      name: "Project",
      link: "#Project",
    },
    {
      name: "Experience",
      link: "#Experience",
    },
    {
      name: "Certificate",
      link: "#Certificate",
    },
    {
      name: "Contact",
      link: "#Contact",
    },
  ];

  return (
    <html lang="en">
      <FloatingNav navItems={navItems} />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
