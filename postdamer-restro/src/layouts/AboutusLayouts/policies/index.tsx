import styles from './styles.module.css'
export const OurPolicy = () => {

    const data ={
        leftTitle:'Our Food Policy',
        leftArticle:'Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.',
        rightArticle:'Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.',
        rightTitle:'Our Core Policy'
    }
  return (
    <div className={styles.background}>
        <div className={styles.container}>



    <div className={styles.main}>
        
    <div className={styles.left}>
        <div className={styles.header}>{data.leftTitle}</div>
        <div className={styles.desc}>{data.leftArticle}</div>

    </div>
    <div className={styles.right}>
    <div className={styles.header}>{data.rightTitle}</div>
        <div className={styles.desc}>{data.rightArticle}</div>
    </div>

    </div>
    </div>
        </div>
  )
}
