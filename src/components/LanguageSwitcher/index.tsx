'use client';
import { FC } from 'react';
import { useRouter } from 'next/navigation';
import { languages } from '@/i18n/config';

interface LanguageSwitcherProps {
  lang: string;
}

const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ lang }) => {
  const router = useRouter();

  return (
    <select
      value={lang}
      onChange={(e) => {
        const selectedLang = e.target.value;
        router.push(`/${selectedLang}`);
      }}
    >
      {languages.map((l) => (
        <option key={l} value={l}>
          {l}
        </option>
      ))}
    </select>
  );
};

export default LanguageSwitcher;
