import Link from "next/link"
import styles from './styles.module.css'

export const VisitBtn = (props:any) => {

    const data=props


  return (
    
<Link style={{color:props.color}} href={data.link} className={styles.cardHover__link}>
        <span>{data.linkTag}</span>
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>        
      </Link>
        )
}
