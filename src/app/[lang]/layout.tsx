import { FC, ReactNode } from 'react';
import { languages } from '@/i18n/config';

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

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
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
