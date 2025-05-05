'use client'
import Link from 'next/link';
import styles from './styles.module.css';

export const InfoBtn = (props:any) => {
    const data= props
  return (
    <button className={styles.wrap}>
        <Link href={data.contactLink} className={styles.button}>{data.contact}</Link>
        </button>
  )
}
