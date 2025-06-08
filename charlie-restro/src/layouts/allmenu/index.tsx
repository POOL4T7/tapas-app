'use client'
import Link from 'next/link';
import styles from './styles.module.css';
import { useParams } from 'next/navigation';

interface MenuCard {
  title: string;
  date: string;
  path: string;
}

const AllMenuCard = ({ title, date, path }: MenuCard) => {
  const params:any= useParams()

  
  return (
    <div className={styles.agCoursesItem}>
      <Link href={`/${params.lang}${path}`} className={styles.agCoursesItemLink}>
        <div className={styles.agCoursesItemBg}></div>
        <div className={styles.agCoursesItemTitle}>
          {title}
        </div>
        <div className={styles.agCoursesItemDate}>
          {date}
        </div>
      </Link>
    </div>
  );
};

export default AllMenuCard;
