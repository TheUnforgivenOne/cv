import { FC } from 'react';
import { getTranslation } from '@/i18n';
import styles from './printButton.module.css';

interface PrintButtonProps {
  lang: string;
}

const PrintButton: FC<PrintButtonProps> = async ({ lang }) => {
  const { t } = await getTranslation(lang);

  return (
    <a href={`CV_Vladislav_Potapov_${lang}.pdf`} download className={styles.printButton}>
      {t('printButtonText')}
    </a>
  );
};

export default PrintButton;
