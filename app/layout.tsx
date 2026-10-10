import type { Metadata } from "next";
import { Fraunces, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

const space = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "Vexoryx — Software, built to spec",
  description:
    "Vexoryx is a small studio of four engineers building web applications, SaaS products, AI-driven features, and custom software.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${space.variable}`}>
      <body className="bg-ink text-paper">
        <Nav />
        <main className="pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
