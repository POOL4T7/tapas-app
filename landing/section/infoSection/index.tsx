import Image from 'next/image'
import styles from './styles.module.css'
import sparkImg from '@/public/image/divider.png'

export const InfoSection = () => {

    const data={
        title:'They All Love Our Food',
        info:'We warmly welcome you to your very own Moonlight market in Mundo Tapas Bar-Restaurant.',
        img:sparkImg
    }

  return (
   <div className={styles.main}>
   <div className={styles.first}>{data.title}</div>
   <div className={styles.second}><Image src={data.img} width={200} height={200} alt='image' loading='lazy'/></div>
   <div className={styles.third}>{data.info}</div>
   </div>
  )
}
