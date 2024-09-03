import MenuButton from "@/components/Menu";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Component Library",
  description: "Next Level Dev Component Library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <MenuButton/>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
