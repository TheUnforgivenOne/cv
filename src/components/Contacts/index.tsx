import { FC } from 'react';
import styles from './contacts.module.css';

enum ContactKey {
  email = 'email',
  phone = 'phone',
  linkedin = 'LinkedIn',
  github = 'GitHub',
}

interface ContactsProps {
  items: { [key in ContactKey]: string };
}

const linkedinUrl = 'https://linkedin.com/in/';
const githubUrl = 'https://github.com/';

const Contacts: FC<ContactsProps> = ({ items }) => {
  const contactItems = Object.entries(items).map(([key, value]) => {
    let icon;
    let content;

    switch (key) {
      case ContactKey.email:
        icon = '✉️';
        content = <a href={`mailto:${value}`}>{value}</a>;
        break;
      case ContactKey.phone:
        icon = '📞';
        content = <a href={`tel:${value}`}>{value}</a>;
        break;
      case ContactKey.linkedin:
        icon = (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3fa0ff" width="100%" height="100%">
            <path d="M4.98 3.5C4.98 5 3.92 6 2.5 6S0 5 0 3.5 1.06 1 2.5 1 5 2 5 3.5zM0 24h5V7H0v17zm7.5 0h5v-9.25c0-2.2 2.5-2.05 2.5 0V24h5v-10c0-5.05-6-4.85-7.5-2.4V7H7.5v17z" />
          </svg>
        );
        content = (
          <a href={linkedinUrl + value} target="_blank" rel="noopener noreferrer">
            {ContactKey.linkedin}
          </a>
        );
        break;
      case ContactKey.github:
        icon = (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.02c-3.338.726-4.033-1.61-4.033-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.204.085 1.838 1.237 1.838 1.237 1.07 1.835 2.807 1.305 3.492.997.107-.775.418-1.305.76-1.605-2.665-.3-5.466-1.335-5.466-5.933 0-1.31.468-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 3-.404 1.02.004 2.04.137 3 .404 2.29-1.552 3.296-1.23 3.296-1.23.653 1.653.24 2.873.118 3.176.77.84 1.232 1.91 1.232 3.22 0 4.61-2.804 5.63-5.475 5.922.43.372.813 1.102.813 2.222v3.293c0 .32.218.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.373-12-12-12z" />
          </svg>
        );
        content = (
          <a href={githubUrl + value} target="_blank" rel="noopener noreferrer">
            {ContactKey.github}
          </a>
        );
        break;
      default:
        icon = '';
        content = value;
    }

    return (
      <div key={key}>
        {icon} {content}
      </div>
    );
  });

  return <div className={styles.contacts}>{contactItems}</div>;
};

export default Contacts;
