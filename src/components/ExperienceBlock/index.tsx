import { FC, ReactNode } from 'react';

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
      {duration && <div>{duration}</div>}
      {company && <span>{company}</span>}
      {location && <span>, {location}</span>}
      {children}
    </article>
  );
};

export default ExperienceBlock;
