import { Button } from '@nextui-org/button';
import styles from './styles.module.css';
import Link from 'next/link';
import Image from 'next/image';
import img from '/public/image/global/service/d1.webp';

export const ContactDetails = (props:any) => {
const langData=props.langData
const data = {
  infoBtn: langData.infoBtn,
  infoLink: '/#',
  title: langData.title,
  bannerTitle: langData.bannerTitle,
  bannerDes: langData.bannerDes,
  arcticalDes: langData.arcticalDes,
  artical: langData.artical,
  artical2: langData.artical2,
  artical3: langData.artical3,
  artical4: langData.artical4,
  artical5: langData.artical5,
  artical6: langData.artical6,
  artical7: langData.artical7,
  articalEnd: langData.articalEnd
};

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        {data.title}
      </h2>
      <div className={styles.main}>
        <div className={styles.mainContainer}>
          <div className={styles.left}>
            <div className={styles.description}>
              {data.arcticalDes}
            </div>
            <div className={styles.line}></div>
            <div className={styles.artical} dangerouslySetInnerHTML={{ __html: data.artical }} />
            <div className={styles.artical} dangerouslySetInnerHTML={{ __html: data.artical2 }}/>
            <div className={styles.artical} dangerouslySetInnerHTML={{ __html: data.artical3 }}/>
            <div className={styles.artical} dangerouslySetInnerHTML={{ __html: data.artical4 }} />
            <div className={styles.artical} dangerouslySetInnerHTML={{ __html: data.artical5 }}/>
            <div className={styles.artical} dangerouslySetInnerHTML={{ __html: data.artical6 }}/>
            <div className={styles.artical} dangerouslySetInnerHTML={{ __html: data.artical7 }} />
            <div className={styles.articalEnd} dangerouslySetInnerHTML={{ __html: data.articalEnd }}/>
            <div className={styles.button}>
              <Link  href={data.infoLink}>
                <Button>{data.infoBtn}</Button>
              </Link>
            </div>
          </div>
          <div className={styles.right}>
            <div style={{width:'100%'}} className="md:w-full">
              <Image
                alt="banner"
                width={600}
                height={900}
                quality={100}
                src={img}
                style={{ height: '100%', width: '100%'}}
                className="w-full"
                loading='lazy'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
