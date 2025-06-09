import styles from './styles.module.css'
import { ProfileSection } from '../ProfileSection'
export const ContactCollaborate = () => {
    const data = {
chef:'Renowned Chefs',
desc:'Meet The Taste Experts​',
details:'Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.'

    }
  return (
    <div>

<div className={styles.background}>
        <div className={styles.container}>



    <div className={styles.main}>
        
        <div className={styles.header}>{data.chef}</div>
        <div className={styles.desc}>{data.desc}</div>
        <div className={styles.details}>{data.details}</div>

 

    <div className={styles.cardC}>
        <ProfileSection/>
    </div>
    </div>
    </div>
        </div>
    </div>
  )
}
