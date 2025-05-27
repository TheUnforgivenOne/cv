'use client';
import { FC } from 'react';
import styles from './printButton.module.css';

interface PrintButtonProps {
  lang: string;
}

const PrintButton: FC<PrintButtonProps> = ({ lang }) => {
  return (
    <a href={`CV_Vladislav_Potapov_${lang}.pdf`} download className={styles.printButton}>
      Save as PDF
    </a>
  );
};

export default PrintButton;
