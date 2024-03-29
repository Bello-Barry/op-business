import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";

import Footer from "@/components/compos/Footer";


import HeaderMobile from '@/components/header-mobile';
import MarginWidthWrapper from '@/components/margin-width-wrapper';
import PageWrapper from '@/components/page-wrapper';
import SideNav from '@/components/side-nav';
import { Metadata } from "next/types";
import { Audiowide, Prompt } from 'next/font/google'
import './globals.css'
import Provider from './Providers'


const display = Audiowide({
	subsets: ['latin'],
	display: 'swap',
	weight: '400',
	variable: '--font-display'
})
const text = Prompt({
	subsets: ['latin'],
	display: 'swap',
	weight: '400',
	variable: '--font-text'
})

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Opportunités et business',
  description: 'un site dopportunités et de business marquer votre présence sur le Web grâce à Op&business',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${text.variable}`} >
      <body className={`bg-white${inter.className}`}>
      
        <div className="flex">
          <SideNav />
          <main className="flex-1">
            <MarginWidthWrapper>
              <Header />
              <HeaderMobile />
              <PageWrapper><Provider>{children} </Provider></PageWrapper>
              <Footer/>
            </MarginWidthWrapper>
          </main>
        </div>
       
      </body>
    </html>
  );
}
