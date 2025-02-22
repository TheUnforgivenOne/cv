import { NextRequest, NextResponse } from 'next/server';
import { languages } from '@/i18n/config';

export const middleware = (request: NextRequest) => {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = languages.some((lng) => pathname.startsWith(`/${lng}`));
  if (pathnameHasLocale) return;

  const lng = 'en'; // get language
  request.nextUrl.pathname = `/${lng}${pathname}`;

  return NextResponse.redirect(request.nextUrl);
};

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest).*)'],
};
