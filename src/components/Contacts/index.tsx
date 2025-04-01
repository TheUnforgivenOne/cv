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
        icon = '🔗';
        content = (
          <a href={linkedinUrl + value} target="_blank" rel="noopener noreferrer">
            {ContactKey.linkedin}
          </a>
        );
        break;
      case ContactKey.github:
        icon = '🐙';
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
      <div key={key} className="contact-item">
        {icon} {content}
      </div>
    );
  });

  return <div className={styles.contacts}>{contactItems}</div>;
};

export default Contacts;
