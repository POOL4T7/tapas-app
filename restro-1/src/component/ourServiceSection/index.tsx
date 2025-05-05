'use client';
import React, { useEffect, useRef } from 'react';
import style from './style.module.css';
import Link from 'next/link';
import { Image } from '@nextui-org/react';

const OurServiceLanding = (params: any) => {
  const langData = params.langData;
  const lang = params.lang;

  const url = 'https://backend.tapas-mundo.com/media/images/';

  const videoBanner = {
    title: 'Welcome',
    desc: 'EXPLORE THE WORLD',
    button: 'Explore',
    src: 'https://res.cloudinary.com/db7izguaw/video/upload/v1715712268/zuhor6sgmw1wmycsopxd.mp4',
  };
  const services = [
    {
      name: langData[0],
      link: `${lang}/einrichtungen/essbereich`,
      image: `${url}/alt/facilites/dining.jpg`,
    },
    {
      name: langData[1],
      link: `${lang}/einrichtungen/bar-mit-vollem-service`,
      image: `${url}/alt/facilites/servicebar.jpg`,
    },
    {
      name: langData[2],
      link: `${lang}/einrichtungen/veranstaltungsraume`,
      image: `${url}/alt/facilites/events.jpg`,
    },
    {
      name: langData[3],
      link: `${lang}/einrichtungen/private-gruppe`,
      image: `${url}/alt/facilites/parties.jpg`,
    },
    {
      name: langData[4],
      link: `${lang}/einrichtungen/wahle-uns`,
      image: `${url}/alt/facilites/why.jpg`,
    },
    {
      name: langData[5],
      link: `${lang}/einrichtungen/all-you-can-eat-brunch`,
      image: `${url}/alt/facilites/brunch.jpg`,
    },
  ];

  const wifi = [
    {
      name: langData[6],
      link: `${lang}/einrichtungen/fruhstuck`,
      image: `${url}/alt/facilites/breakfast.jpg`,
    },
  ];

  const cardRefs: any = useRef([]);

  // useEffect(() => {
  //   const handleMouseEnter = (index:any) => {
  //     cardRefs.current[index].style.outline = `2px solid ${getRandomColor()}`;
  //     cardRefs.current[index].style.outlineOffset = '2px';
  //   };

  //   const handleMouseLeave = (index:any) => {
  //     cardRefs.current[index].style.outline = 'none';
  //   };

  //   cardRefs.current.forEach((card:any, index:any) => {
  //     card.addEventListener('mouseenter', () => handleMouseEnter(index));
  //     card.addEventListener('mouseleave', () => handleMouseLeave(index));

  //     return () => {
  //       card.removeEventListener('mouseenter', () => handleMouseEnter(index));
  //       card.removeEventListener('mouseleave', () => handleMouseLeave(index));
  //     };
  //   });
  // }, []);

  const getRandomColor = () => {
    const colors = [
      '#0d9bed',
      '#b264ea',
      '#f56e7d',
      '#feac55',
      '#fc5c3a',
      '#fdc900',
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className={style.bg}>
      <div className={style.main}>
        <h2 className={style.h3}>{langData[7]}</h2>
        <div className={style.services}>
          <div className={style.servicesMain}>
            {services.map((data, index) => (
              <div
                style={{ backgroundImage: `url(${data.image})` }}
                key={index}
                ref={(el: any) => (cardRefs.current[index] = el)}
                className={style.serviceCard}
              >
                <Link href={data.link}>
                  <div className={style.cardStyle}>
                    <span>{data.name}</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className={style.video}>
            <div
              style={{ backgroundImage: `url(${wifi[0].image})` }}
              ref={(el: any) => (cardRefs.current[0] = el)}
              className={style.serviceCard}
            >
              <Link href={wifi[0].link}>
                <div className={style.cardStyle}>{wifi[0].name}</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServiceLanding;
