import React, { FC } from 'react';
import styles from './badgeList.module.css';

interface BadgeListProps {
  items: string[];
}

const BadgeList: FC<BadgeListProps> = ({ items }) => {
  return (
    <div className={styles.bageList}>
      {items.map((item) => (
        <div key={item} className={styles.badge}>
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
};

export default BadgeList;
