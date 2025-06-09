import { InfoBtn } from "@/component/infoBtn"
import styles from './styles.module.css'
import { CardSlide } from "@/component/cardSlide"

export const ContactDetails = () => {

  const data = {
    infoBtn: 'View Menu',
    infoLink: '/#',
    title: 'Our Resto',
    banner: '',
    bannerTitle: 'Free WiFi For Everyone',
    bannerDes: 'Ask for password to any staff',
    articalTitle: 'A Few Words About Us',
    arcticalDes: 'Serving Best Bbq And Steaks Since 1984',
    artical: 'they met serving Indian food in an eatery in Berlin. Both of them were brought from Delhi, India, to Berlin, Germany, by fate. Be that as it may, It was not India and Germany normal in their lives but rather a lot more things which they found each and every day of their future fellowship.',
    artical2: 'They talked about their common thoughts one night, physically and mentally exhausted from their work. The discussion was long however fascinating, miserable yet significant, entertaining yet clever and direct.'


  }

  return (
    <div className={styles.container}>
        <div className={styles.title}>
          {data.title}
        </div>

    <div className={styles.main}>
      <div className={styles.mainContainer}>


        <div className={styles.left}>
          <div className={styles.heading}>
            {data.articalTitle}
          </div>
          <div className={styles.description}>
            {data.arcticalDes}
          </div>
          <div className={styles.line}></div>
          <div className={styles.artical}>
            {data.artical}
          </div>
          <div className={styles.artical}>
            {data.artical2}
          </div>
          <div className={styles.button}>
            <InfoBtn contactLink={data.infoLink} contact={data.infoBtn} />
          </div>

        </div>
        <div className={styles.right}>
          <CardSlide  title={data.bannerTitle} description={data.bannerDes}/>
        </div>
      </div>
    </div>
    </div>
  )
}
