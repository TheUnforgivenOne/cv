import { InitOptions } from 'i18next';

export const defaultLang = 'en';
export const languages = [defaultLang, 'ru'];
export const defaultNamespace = 'common';
export const cookieName = 'i18n';

export const getConfig = (
  lang: string = defaultLang,
  namespace: string | string[] = defaultNamespace
): InitOptions => ({
  // debug: true,
  supportedLngs: languages,
  fallbackLng: defaultLang,
  lng: lang,
  fallbackNS: defaultNamespace,
  defaultNS: defaultNamespace,
  ns: namespace,
});
