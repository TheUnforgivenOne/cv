import { FC, ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { languages } from '@/i18n/config';
import './globals.css';

const font = Inter({ subsets: ['cyrillic', 'latin'], weight: ['400', '700'] });

export const generateStaticParams = async () => {
  return languages.map((lang) => ({ lang }));
};

interface RootLayoutProps {
  children: ReactNode;
  params: Promise<{
    lang: string;
  }>;
}

const RootLayout: FC<RootLayoutProps> = async ({ children, params }) => {
  const lang = (await params).lang;

  return (
    <html lang={lang}>
      <body className={font.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
