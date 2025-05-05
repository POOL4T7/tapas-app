'use client';
import React, { useState, useEffect } from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import Link from 'next/link';

const CarouselNew = (params: any) => {
  const langData = params.langData;
  const [currentImage, setCurrentImage] = useState(0);
  const imagesU = [
    '/image/img/pexels-bemistermister-3434523.jpg',
    '/image/img/pexels-cottonbro-4253317.jpg',
    '/image/img/pexels-cottonbro-4255490.jpg',
  ];

  const imagesR = [
    '/image/img/pexels-nesrin-danan-1657120-3193818.jpg',
    '/image/img/pexels-vince-2876748.jpg',
    '/image/img/pexels-wancukz-1034940.jpg',
  ];
  const heading = [
    {
      tag: 1,
      title: langData[0].title,
      desc: langData[0].desc,
      color: '#bcb71e',
      Link: '',
      LinkTag: langData[0].LinkTag,
    },
    {
      tag: 2,
      title: langData[1].title,
      desc: langData[1].desc,
      color: '#8b2347',
      Link: 'https://resta1.drypicks.com',
      LinkTag: langData[1].LinkTag,
    },
    {
      tag: 3,
      title: langData[2].title,
      desc: langData[2].desc,
      color: '#de2b2b',
      Link: 'https://resta2.drypicks.com',
      LinkTag: langData[2].LinkTag,
    },
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
              width={800}
              height={600}
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
