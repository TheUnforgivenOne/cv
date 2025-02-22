import { FC, ReactNode } from 'react';
import styles from './section.module.css';

interface SectionProps {
  title: string;
  children: ReactNode;
}

const Section: FC<SectionProps> = ({ title, children }) => {
  return (
    <section className={styles.section}>
      <h3>{title}</h3>
      {children}
    </section>
  );
};

export default Section;
