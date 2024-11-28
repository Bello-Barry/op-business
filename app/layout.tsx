import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/compos/Footer";
import HeaderMobile from '@/components/header-mobile';
import MarginWidthWrapper from '@/components/margin-width-wrapper';
import PageWrapper from '@/components/page-wrapper';
import SideNav from '@/components/side-nav';
import { Metadata } from "next/types";
import { Audiowide, Prompt } from 'next/font/google';
import Provider from './Providers';

const display = Audiowide({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-display'
});
const text = Prompt({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-text'
});
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Opportunités et business',
  description: 'Un site d\'opportunités et de business pour marquer votre présence sur le Web grâce à Op&business',
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="fr" className={`${display.variable} ${text.variable}`}>
      <body className={`bg-gray-50 ${inter.className}`}>
        <div className="flex flex-col min-h-screen">
          {/* Barre latérale */}
          <SideNav />
          <main className="flex-1">
            <MarginWidthWrapper>
              {/* En-tête */}
              <Header />
              <HeaderMobile />
              {/* Contenu principal */}
              <PageWrapper>
                <Provider>{children}</Provider>
              </PageWrapper>
            </MarginWidthWrapper>
          </main>
          {/* Pied de page */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
