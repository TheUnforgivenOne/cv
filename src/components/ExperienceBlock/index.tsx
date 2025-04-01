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
      <div className={styles.secondaryInfo}>
        {duration && <div>{duration}</div>}
        {company && <span>{company}</span>}
        {location && <span>, {location}</span>}
      </div>
      {children}
      <hr />
    </article>
  );
};

export default ExperienceBlock;
