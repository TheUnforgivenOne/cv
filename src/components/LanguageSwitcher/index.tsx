'use client';
import { FC, useState } from 'react';
import { languages } from '@/i18n/config';
import Link from 'next/link';
import styles from './languageSwitcher.module.css';

interface LanguageSwitcherProps {
  lang: string;
}

const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.selectBox} onClick={() => setIsOpen((o) => !o)}>
        🌐
        <span>{lang.toUpperCase()}</span>
        <span className={styles.chevron}>{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && (
        <div className={styles.dropdown}>
          {languages.map((l) => (
            <Link key={l} href={`/${l}`} className={`${styles.option} ${l === lang ? styles.optionSelected : ''}`}>
              {l.toUpperCase()}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
