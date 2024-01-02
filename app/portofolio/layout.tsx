import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./porto.css";
import StarsCanvas from "@/components/main/StarsCanvas";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "barry bello",
  description: "This is my portfolio barry bello",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}