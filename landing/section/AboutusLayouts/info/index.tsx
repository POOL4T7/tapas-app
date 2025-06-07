import styles from './styles.module.css';
import sparkImg from '@/public/image/divider.png';
import Image from 'next/image';

export const InfoContact = (props: any) => {
  const langData = props.langData;
  const data = {
    img: sparkImg,
    about: langData.about,
    title: langData.title,
    desc: langData.desc,
  };
  return (
    <div className={styles.background}>
      <div className={styles.main_container}>
        {/* <div className={styles.offer}>{data.about}</div> */}
        <h1 className={styles.title}>{data.title}</h1>
        <div className={styles.main}>
          <div className={styles.icon}>
            <Image
              src={data.img}
              width={200}
              height={200}
              alt='image'
              loading='lazy'
            />
          </div>
        </div>
        <div className={styles.desc}>{data.desc}</div>
      </div>
    </div>
  );
};
