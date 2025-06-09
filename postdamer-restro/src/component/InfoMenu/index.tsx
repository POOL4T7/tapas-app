import styles from './style.module.css';
import sparkImg from '../../../public/image/divider.png'
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export const InfoMenu = (props:any) => {
  
const menu=props.path

    const data={
        img: sparkImg,
        about:menu[menu.length-2],
        title:menu[menu.length-1],
        desc:'We invite you all to the Café which has gained the specialty of road food from the Legends in Old Delhi and convey you here'
    }
  return (
    <div className={styles.background}>


    <div className={styles.main_container}>
        <div className={styles.main}>

        {/* <div className={styles.line}></div> */}
        {/* <div className={styles.icon}>
       <Image src={data.img} width={200} height={200} alt=''/>
        </div> */}
        {/* <div className={styles.line}></div> */}
        </div>
        {/* <div className={styles.offer}>{data.about}</div>
        <div className={styles.title}>{data.title}</div>
        <div className={styles.time}>
            {data.desc}
        </div> */}
    </div>
    </div>
  )
}
