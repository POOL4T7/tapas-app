import React from 'react';
import styles from './styles.module.css';
import Link from 'next/link';

const SpecialistCard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}></div>
      <h1 className={styles.name}>Spinach & Beetroot Salad</h1>
      <div className={styles.border}></div>
      <p className={styles.info}>This is one of the simplest salads ever, tastes amazing and looks like you&apos;ve made a real effort.</p>
      <div className={styles.greyBorder}></div>
      <Link href="#" className={styles.button}>Read More</Link>
    </div>
  );
}

export default SpecialistCard;
