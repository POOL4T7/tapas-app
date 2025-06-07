'use client';
import CardNewResturant from '@/components/resturantCard/RestCard';
import styles from './styles.module.css';
import { resturant1, resturant2, resturant3 } from '@/Api';
import { useEffect, useState } from 'react';

const CardSection = (props: any) => {
  const [isMobile, setIsMobile] = useState(false);

  const langData = props.langData.AddressList;
  const isimg = {
    mob: '/image/opt/b1.webp',
    lap: '/image/bgqq.webp',
  };
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
  const imagesU = [
    '/image/newRes/1.webp',
    '/image/newRes/2.webp',
    '/image/newRes/3.webp',
  ];
  const data = [
    {
      name: 'MUNDO',
      des: langData[0].title,
      place: 'Alt-Mariendorf',
      Add: 'Alt-Mariendorf 32',
      pin: '12107 Berlin',
      link: resturant1,
      img: imagesU[0],
      alt: 'mundo alt mariendorf',
    },
    {
      name: 'MUNDO',
      des: langData[1].title,
      place: 'Checkpoint Charlie',
      Add: 'Zimmerstraße 19',
      pin: '10969 Berlin',
      link: resturant2,
      img: imagesU[1],
      alt: 'Mundo checkpoint charlie',
    },
    {
      name: 'MUNDO',
      des: langData[2].title,
      place: 'Potsdamer Platz',
      Add: 'Potsdamer Platz',
      pin: '10785 Berlin',
      link: resturant3,
      img: imagesU[2],
      alt: 'Potsdamer Platz',
    },
  ];
  return (
    <div
      style={{
        backgroundImage: isMobile ? `url(${isimg.mob})` : `url(${isimg.lap})`,
      }}
      className={styles.main_container}
    >
      <div className={styles.main}>
        {data.map((data, index) => (
          <div
            key={index}
            className='flex'
            style={{
              flexDirection: 'column',
              textAlign: 'center',
              marginBottom: '10px',
            }}
          >
            <CardNewResturant
              name={data.name}
              link={data.link}
              image={data.img}
              alt={data.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default CardSection;
