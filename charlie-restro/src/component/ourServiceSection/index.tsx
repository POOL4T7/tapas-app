'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from './style.module.css';
import Link from 'next/link';
import NewServiceCard from '../newServiceCard/page';
import Image from 'next/image';
const OurServiceLanding = (params: any) => {
  const langData = params.langData;
  const lang = params.lang;
  const facility1 = [
    {
      name: langData[0],
      link: `${lang}/einrichtungen/essbereich`,
      img: '/image/service/dining.webp',
    },
    {
      name: langData[1],
      link: `${lang}/einrichtungen/bar-mit-vollem-service`,
      img: '/image/service/bar.webp',
    },
    {
      name: langData[2],
      link: `${lang}/einrichtungen/veranstaltungsraume`,
      img: '/image/service/events.webp',
    },
    {
      name: langData[3],
      link: `${lang}/einrichtungen/private-gruppe`,
      img: '/image/service/party.webp',
    },
    {
      name: langData[4],
      link: `${lang}/einrichtungen/wahle-uns`,
      img: '/image/service/why.png',
    },
    {
      name: langData[5],
      link: `${lang}/einrichtungen/essbereich`,
      img: '/image/service/last.webp',
    },
  ];

  const [isMobile, setIsMobile] = useState(false);

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
    <div className={styles.bg}>
      <div className={styles.main}>
        <h2 className={styles.h3}>{langData[6]}</h2>
        <div className={styles.services}>
          <div className={styles.servicesMain}>
            {facility1.map((card, index) => (
              <NewServiceCard
                key={index}
                link={card.link}
                img={card.img}
                title={card.name}
              />
            ))}
          </div>
          {!isMobile && (
            <div className={styles.video}>
              <Image
                quality={100}
                className={styles.imgZ}
                loading='lazy'
                src='/image/service/facilityright.jpg'
                alt={`Image`}
                width={400}
                height={200}
                style={{
                  borderRadius: '20px',
                  marginTop: '5px',
                  height: '96%',
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OurServiceLanding;
