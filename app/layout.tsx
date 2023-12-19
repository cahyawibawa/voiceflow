import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import SiteHeader from './layouts/site-header';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Voiceflow',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='relative flex min-h-screen flex-col'>
          <SiteHeader />
          <div className='flex-1'>{children}</div>
        </div>
      </body>
    </html>
  );
}
