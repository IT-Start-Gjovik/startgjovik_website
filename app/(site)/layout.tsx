import Footer from '@/components/footer/footer';
import Header from '@/components/header/page';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Start Gjøvik',
  description: ' student organisasjon for studenter!',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang='en'>
          <body className={inter.className}>
              <Header />
              {children}
              <Footer />
              <Analytics />
              <SpeedInsights />
          </body>
      </html>
  );
}
