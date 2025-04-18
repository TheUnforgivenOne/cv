'use client';

import { FC, useEffect } from 'react';
import { languages } from '@/i18n/config';

const RootPage: FC = () => {
  useEffect(() => {
    const userLang = navigator.language.split('-')[0] as (typeof languages)[number];
    const lang = languages.includes(userLang) ? userLang : 'en';

    if (window.location.pathname === '/') {
      window.location.replace(`/${lang}`);
    }
  }, []);

  return null;
};

export default RootPage;
