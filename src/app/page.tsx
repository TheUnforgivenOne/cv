'use client';

import { FC, useEffect } from 'react';
import { languages } from '@/i18n/config';

const basePath = '/cv';
const RootPage: FC = () => {
  useEffect(() => {
    const userLang = navigator.language.split('-')[0] as (typeof languages)[number];
    const lang = languages.includes(userLang) ? userLang : 'en';

    const currentPath = window.location.pathname;
    if ([basePath, basePath + '/'].includes(currentPath)) {
      window.location.replace(`${basePath}/${lang}`);
    }
  }, []);

  return null;
};

export default RootPage;
