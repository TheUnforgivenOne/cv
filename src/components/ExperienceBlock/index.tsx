import { FC, ReactNode } from 'react';
import styles from './experienceBlock.module.css';

interface ExperienceBlockProps {
  title: string;
  company?: string;
  location?: string;
  duration?: string;
  children?: ReactNode;
}

const ExperienceBlock: FC<ExperienceBlockProps> = ({ title, children, company, location, duration }) => {
  return (
    <article>
      <h4>{title}</h4>
      <div>
        {company && <h4 className={styles.experienceCompany}>{company}</h4>}
        {duration && <span className={styles.experienceSecondary}>🕒 {duration}</span>}
        {location && <span className={styles.experienceSecondary}>📍 {location}</span>}
      </div>
      {children}
    </article>
  );
};

export default ExperienceBlock;
