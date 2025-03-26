import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Inconsolata, Roboto } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
// const inconsolata = Inconsolata({ subsets: ["latin"] });
// const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Next learning",
  description: "Next project with ts, shadcn",
  keywords: "next.js, typescript, tailwindcss",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="max-w-3xl mx-auto">{children}</div>
      </body>
    </html>
  );
}
