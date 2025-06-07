

import styles from './styles.module.css'
export const index = () => {
    const data={
        title:'Are You Hungry?',
        desc:'Come, Cine With Us!',
        destails:'Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh.',
        normal:'For Restaurant',
        normalNumber:'123 456 7890​',
        private:'Private Dinning​',
        privateNumber:'098 765 4321'​,
        feedbacktitle:'Have Feedback?',
        feedbackDes:'Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh.',
    }
  return (

    <div className={styles.container}>
        
    <div className={styles.heading}>
    <div className={styles.headingTitle}>
    </div>
    <div className={styles.headingdesc}>
    </div>
    <div className={styles.headingdetails}>
    </div>

    </div>
    <div className={styles.mid}>
        
    <div className={styles.left}>
    </div>
    <div className={styles.line}>
    </div>
    <div className={styles.right}>
    </div>

    </div>
    <div className={styles.icon}>
    </div>
    <div className={styles.feedback}>
    <div className={styles.feedbackTitle}>
    </div>
    <div className={styles.feedbackdesc}>
    </div>
  
    </div>
    
    </div>
  )
}
