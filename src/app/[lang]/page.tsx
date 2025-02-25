import ExperienceBlock from '@/components/ExperienceBlock';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import List from '@/components/List';
import Section from '@/components/Section';
import { getTranslation } from '@/i18n';
import { FC } from 'react';

interface HomeProps {
  params: Promise<{
    lang: string;
  }>;
}

const Home: FC<HomeProps> = async ({ params }) => {
  const lang = (await params).lang;
  const { t } = await getTranslation(lang);

  return (
    <div
      style={{ display: 'grid', gridTemplateColumns: '35% 65%', width: '100%' }}
    >
      <div style={{ width: '100%' }}>Photo</div>

      <div style={{ display: 'flex' }}>
        <LanguageSwitcher lang={lang} />

        <div>
          <h1>{t('name')}</h1>
          <h2>{t('jobTitle')}</h2>
        </div>

        <List items={t('contacts', { returnObjects: true })} />
      </div>

      <div>
        <Section title={t('summary.title')}>
          <p>{t('summary.text')}</p>
        </Section>

        <Section title={t('keySkills.title')}>
          <List items={t('keySkills.list', { returnObjects: true })} />
        </Section>

        <Section title={t('education.title')}>
          {t('education.list', { returnObjects: true }).map((eduItem) => (
            <ExperienceBlock
              key={eduItem.title}
              title={eduItem.title}
              company={eduItem.company}
              location={eduItem.location}
              duration={eduItem.duration}
            />
          ))}
        </Section>

        <Section title={t('languages.title')}>
          <List items={t('languages.list', { returnObjects: true })} />
        </Section>
      </div>

      <div>
        <Section title={t('workExperience.title')}>
          {t('workExperience.list', { returnObjects: true }).map((expItem) => (
            <ExperienceBlock
              key={expItem.title}
              title={expItem.title}
              company={expItem.company}
              location={expItem.location}
              duration={expItem.duration}
            >
              <div>{expItem.details.project}</div>
              <div>{t('workExperience.achievementsTitle')}</div>
              <List items={expItem.details.achievements} />
              <div>{t('workExperience.stackTitle')}</div>
              <List items={expItem.details.stack} />
            </ExperienceBlock>
          ))}
        </Section>
      </div>
    </div>
  );
};

export default Home;
