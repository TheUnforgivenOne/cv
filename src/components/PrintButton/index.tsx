'use client';
import { FC } from 'react';
import styles from './printButton.module.css';

interface PrintButtonProps {
  lang: string;
}

const PrintButton: FC<PrintButtonProps> = ({ lang }) => {
  const onPrint = async () => {
    const originalCVPage = document.getElementById('cv');
    if (!originalCVPage) return;

    const html2pdf = (await import('html2pdf.js')).default;

    const cvPage = originalCVPage.cloneNode(true);

    const styledCVPage = document.createElement('div');
    styledCVPage.style.fontSize = '12px';
    styledCVPage.appendChild(cvPage);

    html2pdf(styledCVPage, {
      filename: `CV_Vladislav_Potapov_${lang}`,
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    });
  };

  return (
    <button onClick={onPrint} className={styles.printButton}>
      Save as PDF
    </button>
  );
};

export default PrintButton;
