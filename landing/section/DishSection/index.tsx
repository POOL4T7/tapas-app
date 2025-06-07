'use client'
import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import DishCard from '@/components/newCardResturant/CardNewResturant';
const DishSection = (props: any) => {
  const langData = props.langData;
  const lang = props.lang;
  const [isMobile, setIsMobile] = useState(false);
  const [isimg, setIsImg] = useState({
    mob:'/image/opt/b2.webp',
    lap:'/image/finalPic/extraBG/rs1.webp'
  });
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
    '/image/global/cF/cir1.jpg',
    '/image/global/cF/cir2.jpg',
    '/image/global/cF/cir3.jpg',
  ];
  const data = [
    {
      name: 'Brunch Buffet',
      link: 'https://alt-mariendorf.tapas-mundo.com/en/men%C3%BCkarte-menu-card/brunch-buffet',
      img: imagesU[0],
      name1: 'All You Can eat in Alt Mariendorf',
    },
    {
      name: 'Events',
      link: `${lang}/dienstleistungen/veranstaltungen`,
      img: imagesU[1],
      name1: 'Celebrate with us',
    },
    {
      name: 'Catering',
      link: `${lang}/dienstleistungen/gastronomie`,
      img: imagesU[2],
      name1: 'Planning for Large Event?',
    },
  ];

  return (
    <div style={{ backgroundImage: isMobile?`url(${isimg.mob})`:`url(${isimg.lap})` }} className={styles.bg}>
      <div className={styles.main_container}>
        <div className={styles.main}>
          <div className={styles.line}></div>

          {data.map((data, index) => (
            <div
              key={index}
              className='flex'
              style={{
                flexDirection: 'column',
                textAlign: 'center',
                paddingBottom: '3rem',
              }}
            >
              <DishCard name={data.name} link={data.link} image={data.img} />
              <h3
                style={{
                  fontSize: '1.6rem',
                  fontWeight: 'bold',
                  marginTop: '10px',
                  color: 'white',
                }}
                className='mt-5'
              >
                {data.name}
              </h3>
              <p
                style={{
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  marginTop: '10px',
                  color: 'white',
                }}
                className='mt-3'
              >
                {data.name1}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default DishSection