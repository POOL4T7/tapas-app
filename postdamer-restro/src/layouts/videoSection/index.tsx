'use client'
import { RightSideDrawer } from '../../component/Drawer';
import styles from './styles.module.css';

export const VideoSection = (props:any) => {
  const onNextSection=props.onNextSection

  const videoBanner ={
    title:'Welcome',
    desc:'EXPLORE THE WORLD',
    button:'Explore',
    src:'https://res.cloudinary.com/db7izguaw/video/upload/v1715712268/zuhor6sgmw1wmycsopxd.mp4'

  }

  return (
    <div className={styles.home}>
      <video muted loop autoPlay>
        <source src={videoBanner.src} type="video/mp4"/>
      </video>
        <svg onClick={onNextSection} className={styles.arrows}>
							<path className={styles.a1} d="M0 0 L30 32 L60 0"></path>
							<path className={styles.a2} d="M0 20 L30 52 L60 20"></path>
							<path className={styles.a3} d="M0 40 L30 72 L60 40"></path>
						</svg>

                      
    </div>
  );
}


