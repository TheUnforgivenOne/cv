'use client';
import { FC } from 'react';
import html2pdf from 'html2pdf.js';
import styles from './printButton.module.css';

interface PrintButtonProps {
  lang: string;
}

const PrintButton: FC<PrintButtonProps> = () => {
  const onPrint = () => {
    const originalCVPage = document.getElementById('cv');
    if (!originalCVPage) return;

    const cvPage = originalCVPage.cloneNode(true);

    const styledCVPage = document.createElement('div');
    styledCVPage.style.fontSize = '12px';
    styledCVPage.appendChild(cvPage);
    console.log(styledCVPage);

    html2pdf(styledCVPage);
  };

  return (
    <button onClick={onPrint} className={styles.printButton}>
      Save as PDF
    </button>
  );
};

export default PrintButton;
