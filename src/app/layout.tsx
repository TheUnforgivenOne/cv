import { FC, ReactNode } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';

const font = Inter({ subsets: ['cyrillic', 'latin'], weight: ['400', '700'], display: 'swap' });

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = async ({ children }) => {
  return (
    <html>
      <body className={font.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
