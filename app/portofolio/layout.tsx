import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./porto.css";
import StarsCanvas from "@/components/main/StarsCanvas";
import Navbar from "@/components/main/Navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "créé un site web",
  description: "This is the portfolio of Barry Bello",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${inter.className} bg-gradient-to-b from-[#030014] to-[#1e1e2f] overflow-y-scroll overflow-x-hidden`}
      >
        {/* Background stars animation */}
        <StarsCanvas />

        {/* Navbar with a sticky effect for mobile */}
        <div className="sticky top-0 z-50 bg-opacity-90 backdrop-blur-md">
  <Navbar />
</div>
        {/* Main content */}
        <main className="min-h-screen px-4 md:px-20">{children}</main>

        
      </body>
    </html>
  );
}
