import ExperienceBlock from '@/components/ExperienceBlock';
import List from '@/components/List';
import Section from '@/components/Section';
import { getTranslation } from '@/i18n';
import Image from 'next/image';
import { FC } from 'react';
import { languages } from '@/i18n/config';
import profilePicture from '/public/profilePicture.jpeg';
import styles from './page.module.css';
import Contacts from '@/components/Contacts';
import BadgeList from '@/components/BadgeList';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import PrintButton from '@/components/PrintButton';

interface CVPageProps {
  params: Promise<{
    lang: string;
  }>;
}

export const generateStaticParams = async () => {
  return languages.map((lang) => ({ lang }));
};

const CVPage: FC<CVPageProps> = async ({ params }) => {
  const lang = (await params).lang;
  const { t } = await getTranslation(lang);

  return (
    <div className={styles.cvPageWrapper}>
      <LanguageSwitcher lang={lang} />
      <PrintButton />

      <div className={styles.titleBlock}>
        <h1>{t('name')}</h1>
        <h2>{t('jobTitle')}</h2>

        <Contacts items={t('contacts', { returnObjects: true })} />
      </div>

      <div className={styles.mainInfoBlock}>
        <div className={styles.contentBlock}>
          <Image src={profilePicture} alt="profile picture" className={styles.profilePicture} unoptimized />

          <Section title={t('summary.title')}>
            <p>{t('summary.text')}</p>
          </Section>

          <Section title={t('keySkills.title')}>
            <BadgeList items={t('keySkills.list', { returnObjects: true })} />
          </Section>

          <Section title={t('languages.title')}>
            <List items={t('languages.list', { returnObjects: true })} />
          </Section>

          <Section title={t('education.title')}>
            {t('education.list', { returnObjects: true }).map((eduItem) => (
              <ExperienceBlock key={eduItem.duration} {...eduItem} />
            ))}
          </Section>
        </div>

        <div className={styles.contentBlock}>
          <Section title={t('workExperience.title')}>
            {t('workExperience.list', { returnObjects: true }).map((expItem) => (
              <ExperienceBlock key={expItem.duration} {...expItem}>
                <p>{expItem.details.project}</p>
                <h4>{t('workExperience.achievementsTitle')}</h4>
                <List items={expItem.details.achievements} />
                <h4>{t('workExperience.stackTitle')}</h4>
                <BadgeList items={expItem.details.stack} />
              </ExperienceBlock>
            ))}
          </Section>
        </div>
      </div>
    </div>
  );
};

export default CVPage;
