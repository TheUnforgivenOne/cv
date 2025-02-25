import { createInstance } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next/initReactI18next';
import { defaultNamespace, getConfig } from './config';

export const getTranslation = async (
  lang: string,
  namespace: string = defaultNamespace
) => {
  const i18n = createInstance();

  await i18n
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (lang: string, namespace: string) =>
          import(`@/locales/${lang}/${namespace}.json`)
      )
    )
    .init(getConfig(lang, namespace));

  return {
    t: i18n.getFixedT(lang),
    i18n,
  };
};
