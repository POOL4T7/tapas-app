'use client'
import Link from 'next/link'
import styles from './contactBtn.module.css'
export const Contactbtn = (props:any) => {
    const {link,linkTag}=props
  return (
<Link href={link}>
  <div className={styles.buttonC}>
    {linkTag}
  </div>
  </Link>

  )
}
