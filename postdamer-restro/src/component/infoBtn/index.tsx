'use client'
import styles from './styles.module.css';

export const InfoBtn = (props:any) => {
    const data= props
  return (
    <button className={styles.wrap}>
        <a href={data.contactLink} className={styles.button}>{data.contact}</a>
        </button>
  )
}
