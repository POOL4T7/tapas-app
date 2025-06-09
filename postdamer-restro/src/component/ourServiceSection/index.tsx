import React from 'react';
import style from './style.module.css';
import Link from 'next/link';
import { Image } from '@nextui-org/react';
const OurServiceLanding = () => {
  const videoBanner = {
    title: 'Welcome',
    desc: 'EXPLORE THE WORLD',
    button: 'Explore',
    src: 'https://res.cloudinary.com/db7izguaw/video/upload/v1715712268/zuhor6sgmw1wmycsopxd.mp4',
  };
  const services = [
    { name: 'DiningArea', link: '/facilities/diningArea' },
    { name: 'OutdoorPatio', link: '/facilities/outdoorPatio' },
    { name: 'FullServiceBar', link: '/facilities/fullServiceBar' },
    { name: 'EventSpace', link: '/facilities/eventSpace' },
    { name: 'WineCellar', link: '/facilities/wineCellar' },
    { name: 'FreeWiFi', link: '/facilities/freeWiFi' },
    { name: 'CleanWashrooms', link: '/facilities/cleanWashrooms' },
  ];

  return (
    <div className={style.main}>
      <h3 className={style.h3}>facilities</h3>
      <div className={style.services}>
        <div className={style.servicesMain}>
          {services.map((data, index) => (
            <div key={index} className={style.serviceCard}>
              <Link href={data.link}>
                <div className={style.cardStyle}>{data.name}</div>
              </Link>
            </div>
          ))}
        </div>
        <div className={style.video}>
          {/* <video muted controls>
                <source src={videoBanner.src} type="video/mp4"/>
            </video> */}
          <Image
            isZoomed
            loading='lazy'
            src='/image/img/pexels-willpicturethis-2641886.webp'
            alt={`Image`}
            width={600}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default OurServiceLanding;
