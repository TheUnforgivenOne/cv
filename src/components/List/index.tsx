import { FC } from 'react';
import styles from './list.module.css';

interface ListProps {
  items: string[];
}

const List: FC<ListProps> = ({ items }) => (
  <ul className={styles.list}>
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

export default List;
