'use client';
import React, { useState, useEffect } from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Contactbtn } from '../contactBtn';
import { resturant1, resturant2, resturant3 } from '@/Api';
import logo from '/public/image/logo.svg';

const Carousel = (props: any) => {
  const langData = props.langData;
  const [currentImage, setCurrentImage] = useState(0);
  const imagesU = [
    {
      url: '/image/opt/g1.webp',
      urlm: '/image/opt/mg1.webp',
      alt: 'welcome',
    },
    {
      url: '/image/landing/slide22.webp',
      urlm: '/image/opt/mg2.webp',
      alt: 'restaurants berlin',
    },
    {
      url: '/image/landing/slide3.webp',
      urlm: '/image/opt/mg3.webp',
      alt: 'restaurants berlin ',
    },
    {
      url: '/image/opt/g4.webp',
      urlm: '/image/opt/mg4.webp',
      alt: 'tapas mundo',
    },
    {
      url: '/image/opt/g5.webp',
      urlm: '/image/opt/mg5.webp',
      alt: 'Tapas-Menü im Restaurant',
    },
  ];
  const imagesC = [
    {
      url: '/image/global/c1/c1.webp',
      alt: 'restaurant berlin2',
    },
    {
      url: '/image/global/c1/c2.webp',
      alt: 'mundo - tapas bar - mitte',
    },
    {
      url: '/image/global/c1/c3.webp',
      alt: 'mundo tapas bar mitte',
    },
    {
      url: '/image/global/c1/c44.webp',
      alt: 'mundo frühstück',
    },
    {
      url: '/image/global/c1/c5.webp',
      alt: 'restaurant tapas',
    },
  ];
  const imagesR = [
    {
      url: '/image/global/r1/c1.webp',
      alt: 'Mundo restaurant',
    },
    {
      url: '/image/global/r1/c1.webp',
      alt: 'Mundo restaurant',
    },
    {
      url: '/image/global/r1/c2.webp',
      alt: 'Tapas Mundo',
    },
    {
      url: '/image/global/r1/c3.webp',
      alt: 'restaurant berlin',
    },
  ];

  const restaurantName = [
    'Alt-Mariendorf',
    'Checkpoint\u00A0Charlie',
    'Potsdamer Platz',
  ];
  // Welcome to Mundo Tapas – where Spanish and Latin American flavors come alive with every dish, celebrating tradition and taste. Bienvenidos!
  const heading = [
    {
      tag: 1,
      title: langData[0].title,
      name: langData[0].name,
      desc: langData[0].desc,
      color: '#A91D3A',
      Link: '',
      LinkTag: langData[0].LinkTag,
      logo: logo,
    },
    {
      tag: 2,
      title: langData[1].title,
      name: langData[1].name,
      desc: langData[1].desc,
      color: '#A91D3A',
      Link: resturant1,
      LinkTag: langData[1].LinkTag,
      logo: logo,
    },
    {
      tag: 3,
      title: langData[2].title,
      name: langData[2].name,
      desc: langData[2].desc,
      color: '#A91D3A',
      Link: resturant2,
      LinkTag: langData[2].LinkTag,
      logo: logo,
    },
    {
      tag: 4,
      title: langData[3].title,
      name: langData[3].name,
      desc: langData[3].desc,
      color: '#A91D3A',
      Link: resturant3,
      LinkTag: langData[3].LinkTag,
      logo: logo,
    },
    {
      tag: 5,
      title: langData[4].title,
      name: '',
      desc: '',
      color: '#A91D3A',
      Link: '#specialItem',
      LinkTag: 'Lets Try',
      logo: logo,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % imagesU.length);
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval);
  }, [imagesU.length]);

  const handleChangeImage = (index: number) => {
    setCurrentImage(index);
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
    index: number
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleChangeImage(index);
    }
  };

  return (
    <div className={styles.carousel}>
      {imagesU.map((imgSrcU, index) => (
        <div
          key={index}
          className={`${styles.imageContainer} ${currentImage === index ? styles.active : ''}`}
          style={{ zIndex: currentImage === index ? 1 : 0 }}
          role='tabpanel'
          aria-hidden={currentImage !== index}
          tabIndex={currentImage === index ? 0 : -1}
        >
          <div
            className={`${styles.imageLeft} ${currentImage === index ? styles.activeImage : ''}`}
          >
            <Image
            className='block lg:hidden'
              loading='eager'
              src={imgSrcU.urlm}
              alt={imgSrcU.alt}
              width={414}
              height={448}
            />
            <Image
            className='hidden lg:block'
              loading='eager'
              src={imgSrcU.url}
              alt={imgSrcU.alt}
              width={960}
              height={1080}
              
            />
          </div>
          <div
            className={`${styles.textContainer} ${currentImage === index ? styles.activeText : ''}`}
            style={{ backgroundColor: heading[index].color }}
          >
            {/* <div style={{ display: 'flex', flexDirection: 'row', textAlign: 'center', justifyContent: 'center', alignItems: 'center', color: '#ffcc00' }}> */}

              {index==0?
                <h1 className='!text-5xl text-white'><span className='!text-3xl text-white' >{heading[index].title}</span><br />{heading[index].name}</h1>:<h2 className='!text-5xl text-white'><span className='!text-3xl text-white'>{heading[index].title}</span><br />{heading[index].name}</h2>
              }

            {/* <div style={{ height: '100px', width: '100px',display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>

                <Image alt='logo' src={heading[index].logo} width={100} height={100} />
              </div> */}
            {/* </div> */}
            <p>{heading[index].desc}</p>
            {heading[index].tag === 1 ? (
              <div className={styles.restContainer}>
                {[1, 2, 3].map((num, key) => (
                  <Link key={key} href={heading[num].Link}>
                    <Image
                      loading='eager'
                      src={imagesR[num].url}
                      alt={imagesR[num].alt}
                      width={640}
                      height={640}
                      className={`h-24 object-top object-cover w-24 rounded-full outline outline-2 outline-white outline-offset-2 ${styles.imgRest}`}
                    />
                    <h6
                      className={styles.titleRest}
                      style={{ color: 'snow', padding: '5px' }}
                    >
                      {restaurantName[num - 1]}
                    </h6>
                  </Link>
                ))}
              </div>
            ) : (
              <Contactbtn
                link={heading[index].Link}
                linkTag={heading[index].LinkTag}
              />
            )}
          </div>
          <div className={styles.buttonContainer}>
            {imagesC.map((img, btnIndex) => (
              <div
                key={btnIndex}
                onClick={() => handleChangeImage(btnIndex)}
                onKeyDown={(event) => handleKeyDown(event, btnIndex)}
                role='button'
                tabIndex={0}
                className={`${styles.navButton} ${currentImage === btnIndex ? styles.activeButton : ''}`}
                aria-label={`Show slide ${btnIndex + 1}`}
                aria-pressed={currentImage === btnIndex}
              >
                <Image
                  loading='eager'
                  width={100}
                  height={100}
                  src={img.url}
                  alt={img.alt}
                  className={`mx-auto object-cover h-10 w-10 rounded-full outline outline-2 ${currentImage === btnIndex ? 'outline-white outline-offset-2' : ''}`}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
