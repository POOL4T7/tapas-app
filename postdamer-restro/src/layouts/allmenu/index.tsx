'use client'
import Link from 'next/link';
import styles from './styles.module.css';

interface MenuCard {
  title: string;
  date: string;
  path: string;
}

const AllMenuCard = ({ title, date, path }: MenuCard) => {
  return (
    <div className={styles.agCoursesItem}>
      <a href={path} className={styles.agCoursesItemLink}>
        <div className={styles.agCoursesItemBg}></div>
        <div className={styles.agCoursesItemTitle}>
          {title}
        </div>
        <div className={styles.agCoursesItemDate}>
          {date}
        </div>
      </a>
    </div>
  );
};

export default AllMenuCard;
