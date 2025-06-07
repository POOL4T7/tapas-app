'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from './style.module.css';
import Link from 'next/link';
import Image from 'next/image';


const OurServiceLanding = (props: any) => {
  const langData = props.langData;
  const services = [
    {
      name: langData[1].name,
      link: `/${props.lang}/dienstleistungen/essen`,
      img: `/image/global/service/d1.webp`,
    },
    {
      name: langData[2].name,
      link: `/${props.lang}/dienstleistungen/gastronomie`,
      img: `/image/global/service/d2.webp`,
    },
    {
      name: langData[3].name,
      link: `/${props.lang}/dienstleistungen/veranstaltungen`,
      img: `/image/global/service/d3.webp`,
    },
    {
      name: langData[4].name,
      link: `/${props.lang}/dienstleistungen/besonderheiten`,
      img: `/image/global/service/d4.webp`,
    },
    {
      name: langData[5].name,
      link: `/${props.lang}/dienstleistungen/geschenkkarte`,
      img: `'/image/opt/g1.webp'`,
    },
  ];

  const [isMobile, setIsMobile] = useState(false);
  const isimg={
    mob:'/image/opt/b1.webp',
    lap:'/image/bgqq.webp'
  }
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const cardRefs: any = useRef([]);

  return (
    <div style={{ backgroundImage: isMobile?`url(${isimg.mob})`:`url(${isimg.lap})` }}  className={styles.main}>
      <h2 className={styles.h3}>{langData[0].name}</h2>
      <div className={styles.services}>
        <div className={styles.servicesMain}>
          {services.map((data, index) => (
            <div
              key={index}
              ref={(el: any) => (cardRefs.current[index] = el)}
              style={{ backgroundImage: `url(${data.img})` }}
              className={styles.serviceCard}
            >
              <Link href={data.link}>
                <div className={styles.cardStyle}>
                  <span>{data.name}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
        
          <div className={`${styles.video} hidden lg:flex`}>
            <Image
              className={styles.imgZ}
              loading='eager'
              src='/image/finalPic/serviceL/sR.webp'
              alt={`Image`}
              width={300}
              height={450}
              style={{ borderRadius: '20px', height: '93%' }}
            />
          </div>
       
      </div>
    </div>
  );
};

export default OurServiceLanding;
