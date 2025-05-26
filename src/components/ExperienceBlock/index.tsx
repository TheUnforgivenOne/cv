import { FC, ReactNode } from 'react';
import styles from './experienceBlock.module.css';

interface ExperienceBlockProps {
  title: string;
  company: string;
  location: string;
  duration: string;
  children?: ReactNode;
}

const ExperienceBlock: FC<ExperienceBlockProps> = ({ title, children, company, location, duration }) => {
  return (
    <article className={styles.experience}>
      <h4>{title}</h4>
      <h4 className={styles.experienceCompany}>{company}</h4>
      <div className={styles.experienceSecondary}>
        <span>🕒 {duration}</span>
        <span>📍 {location}</span>
      </div>
      {children}
    </article>
  );
};

export default ExperienceBlock;
