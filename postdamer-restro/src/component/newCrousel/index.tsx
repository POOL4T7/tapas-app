'use client';
import React, { useState, useEffect } from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import { ContackBtn } from '../contactBtn';
import Link from 'next/link';

const CarouselNew = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const imagesU = [
    '/image/img/pexels-bemistermister-3434523.webp',
    // '/image/img/pexels-cottonbro-4253317.webp',
    // '/image/img/pexels-cottonbro-4255490.webp',
  ];

  const imagesR = [
    '/image/img/pexels-nesrin-danan-1657120-3193818.webp',
    // '/image/img/pexels-vince-2876748.webp',
    // '/image/img/pexels-wancukz-1034940.webp',
  ];
  const heading = [
    {
      tag: 1,
      title: 'MUNDO',
      desc: 'Potsdamer Platz comming Soon in 2025',
      color: '#bcb71e',
      Link: '',
      LinkTag: 'Explore',
    },
    // { tag: 2, title: 'Dishes', desc: 'Taste the magic', color: '#8b2347', Link: 'https://resta1.drypicks.com', LinkTag: 'Visit Now' },
    // { tag: 3, title: 'Offer', desc: '10 % Additional Discount', color: '#de2b2b', Link: 'https://resta2.drypicks.com', LinkTag: 'Visit Now' },
    // { tag: 4, title: 'Third', desc: 'This is the third restaurant', color: '#f5a321', Link: 'https://resta3.drypicks.com', LinkTag: 'Visit Now' },
    // { tag: 5, title: 'Offer', desc: 'Special offer', color: '#E7E1D3', Link: 'https://resta3.drypicks.com', LinkTag: 'Visit Now' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % imagesU.length);
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval);
  }, [imagesU.length]);

  const handleChangeImage = (index: any) => {
    setCurrentImage(index);
  };

  return (
    <div className={styles.carousel}>
      {imagesU.map((imgSrcU, index) => (
        <div
          key={index}
          className={`${styles.imageContainer} ${
            currentImage === index ? styles.active : ''
          }`}
          style={{ zIndex: currentImage === index ? 1 : 0 }}
        >
          <div
            className={`${styles.imageLeft} ${
              currentImage === index ? styles.activeImage : ''
            }`}
          >
            <Image
              quality={100}
              src={imgSrcU}
              alt={`Image ${index + 1}`}
              width={640}
              height={640}
            />
          </div>

          <div
            className={`${styles.textContainer} ${
              currentImage === index ? styles.activeText : ''
            }`}
            style={{ backgroundColor: heading[index].color }}
          >
            <h2>{heading[index].title}</h2>
            <p>{heading[index].desc}</p>
            <Link
              className='border-1 rounded-sm p-2'
              href={'https://tapas-mundo.com/'}
            >
              Tapas Mundo
            </Link>
          </div>
          <div
            className={`${styles.imageRight} ${
              currentImage === index ? styles.activeImage : ''
            }`}
          >
            <Image
              quality={100}
              src={imagesR[index]}
              alt={`Image ${index + 1}`}
              width={800}
              height={600}
            />
          </div>
          <div className={styles.buttonContainer}>
            {imagesU.map((img, btnIndex) => (
              <div
                onClick={() => handleChangeImage(btnIndex)}
                key={btnIndex}
                className={`${styles.navButton} ${
                  currentImage === btnIndex ? styles.activeButton : ''
                }`}
              ></div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarouselNew;
