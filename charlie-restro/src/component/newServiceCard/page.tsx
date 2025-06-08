import React from 'react';
import styles from './style.module.css';
import Link from 'next/link';
import Image from 'next/image';

const NewServiceCard = (data: any) => {
  return (
    <div
      style={{ height: data.height, width: data.width }}
      className={styles.card}
    >
      <Link href={data.link}>
        <Image
          style={{ objectFit: 'cover' }}
          width={900}
          height={700}
          src={data.img}
          className={styles.card__image}
          alt='img'
        />
        <div className={styles.card__overlay}>
          <div className={styles.card__header}>
            <svg
              className={styles.card__arc}
              xmlns='http://www.w3.org/2000/svg'
            >
              <path />
            </svg>
            <div className={styles.card__headerText}>
              <span className={styles.card__title}>{data.title}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NewServiceCard;
