import { FC, ReactNode } from 'react';
import styles from './experienceBlock.module.css';

interface ExperienceBlockProps {
  title: string;
  company: string;
  location: string;
  duration: string;
  isLast: boolean;
  children?: ReactNode;
}

const ExperienceBlock: FC<ExperienceBlockProps> = ({ title, company, location, duration, isLast, children }) => {
  return (
    <article className={styles.experience}>
      <h4>{title}</h4>
      <h4 className={styles.experienceCompany}>{company}</h4>
      <div className={styles.experienceSecondary}>
        <span>🕒 {duration}</span>
        <span>📍 {location}</span>
      </div>
      {children}
      {!isLast && <hr />}
    </article>
  );
};

export default ExperienceBlock;
