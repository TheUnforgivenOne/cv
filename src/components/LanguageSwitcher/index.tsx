import { FC } from 'react';
import Link from 'next/link';
import { languages } from '@/i18n/config';

interface LanguageSwitcherProps {
  lang: string;
}

const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ lang }) => {
  return (
    <div className="noPrint">
      <div>{lang}</div>
      {languages
        .filter((l) => l !== lang)
        .map((l) => (
          <Link key={l} href={`/${l}`}>
            {l}
          </Link>
        ))}
    </div>
  );
};

export default LanguageSwitcher;
