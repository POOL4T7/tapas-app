'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from './style.module.css';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';

const SpecialDish = (props: any) => {
  const langData = props.langData;

  const specialItems = {
    tapas: {
      name: langData[0].name,
      image: '/image/global/dish/d1.jpg',
      size: 320,
      position: 'left',
      circleColors: '#cd8a21',
    },
    paellas: {
      name: langData[1].name,
      image: '/image/global/dish/d2.jpg',
      size: 320,
      position: 'right',
      circleColors: '#cd8a21',
    },
    fajitas: {
      name: langData[2].name,
      image: '/image/global/dish/d3.jpg',
      size: 320,
      circleColors: '#cd8a21',
      position: 'left',
    },
    spanishWines: {
      name: langData[3].name,
      image: '/image/global/dish/d4.jpg',
      size: 320,
      position: 'right',
      circleColors: '#cd8a21',
    },
    cocktails: {
      name: langData[4].name,
      image: '/image/global/dish/d5.jpg',
      size: 320,
      position: 'left',
      circleColors: '#cd8a21',
    },
    beers: {
      name: langData[5].name,
      image: '/image/global/dish/d6.jpg',
      size: 320,
      position: 'right',
      circleColors: '#cd8a21',
    },
    burgers: {
      name: langData[6].name,
      image: '/image/global/dish/d7.jpg',
      size: 320,
      position: 'left',
      circleColors: '#cd8a21',
    },
  };
  const pathname = usePathname();
  const reservationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (pathname === '/#specialItem') {

    reservationRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
  }, [pathname]);

  const items = Object.values(specialItems);

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

  return (
    <motion.section
      id='specialItem'
      ref={reservationRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 1 }}
    >
      <div className={styles.bgmain}>
        <div className={styles.main}>
          <h2 className='mt-5 flex items-center justify-center text-white font-bold text-3xl'>
            {langData[7].name}
          </h2>
          <div className={styles.mainWrapper}>
            <div className={styles.mainC}>
              <div className={styles.wrapper}>
                {items.map((item, index) => (
                  <div
                    className=' w-full p-6 rounded-lg my-4'
                    key={item.name}
                    style={{
                      display: 'flex',
                      flexDirection:
                        item.position === 'right' ? 'row-reverse' : 'row',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flexDirection:
                          item.position !== 'right' ? 'row-reverse' : 'row',
                      }}
                    >
                      <div
                        className={`${styles.dishImage}`}
                        style={{
                          width: '100%',
                          borderRadius: '50%',
                          display: 'flex',
                          justifyContent: isMobile
                            ? ''
                            : item.position == 'right'
                              ? 'flex-end'
                              : 'flex-start',
                          flexDirection:
                            item.position !== 'right' ? 'row-reverse' : 'row',
                        }}
                      >
                        <h3
                          style={{
                            width: `calc(100% - ${isMobile ? item.size / 2 : item.size}px)`,
                            color: 'white',
                            fontSize: isMobile ? '0.8rem' : '1.2rem',
                            fontStyle: 'italic',
                            fontFamily: '"Poppins", sans-serif',
                            display: 'flex',
                            fontWeight: 'normal',
                            justifyContent: 'flex-start',
                            margin: 0,
                            paddingRight: '10px',
                          }}
                        >
                          <span
                            style={{
                              marginTop: 'auto',
                              marginBottom: '10px',
                              marginLeft: '10px',
                              display: 'flex',
                            }}
                            dangerouslySetInnerHTML={{ __html: item.name }}
                          >
                            {/* {item.name} */}
                          </span>
                        </h3>
                        <Image
                          src={item.image}
                          alt={item.name || 'image'}
                          quality={100}
                          width={isMobile ? item.size / 2 : item.size}
                          height={isMobile ? item.size / 2 : item.size}
                          style={{ zIndex: 0 }}
                          className={`mx-1 object-cover rounded-full h-${isMobile ? item.size / 2 : item.size}  w-${isMobile ? item.size / 2 : item.size} ${styles.outlineC}`}
                          loading='lazy'
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {!isMobile && (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                }}
                className={styles.chefPic}
              >
                <Image
                  width={600}
                  height={900}
                  quality={100}
                  src='/image/people1.jpg'
                  alt='chef'
                  className={`${styles.outlineC}`}
                  style={{ borderRadius: '20px' }}
                  loading='lazy'
                />
                <Image
                  width={600}
                  height={900}
                  quality={100}
                  className={`${styles.outlineC}`}
                  src='/image/people2.jpg'
                  alt='chef'
                  style={{ borderRadius: '20px', margin: '1rem 0' }}
                  loading='lazy'
                />
                <Image
                  width={600}
                  height={900}
                  quality={100}
                  className={`${styles.outlineC}`}
                  src='/image/people3.jpg'
                  alt='chef'
                  style={{ borderRadius: '20px' }}
                  loading='lazy'
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default SpecialDish;
