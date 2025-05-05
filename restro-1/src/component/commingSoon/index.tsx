'use client';
import Head from 'next/head';
import img from '../../../public/image/alt.jpg';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { getDictionary } from '@/getDictionary';
const comingSoon = {
  title: 'Coming Soon',
  desc: 'Stay tuned! Something awesome is on its way.',
};
export default function ComingSoon({ color, height, contact }: any) {
  const pathName: any = useParams();
  const isLoading = useRef(false);
  const [langData, setLangData]: any = useState(null);

  const comingSoon1 = {
    title: 'Coming Soon',
    desc: 'Stay tuned! Something awesome is on its way.',
  };

  useEffect(() => {
    const fechDic = async () => {
      if (isLoading.current) return;
      isLoading.current = true;

      try {
        const data = await getDictionary(pathName.lang);
        setLangData(data);
      } catch (error) {
        console.error('Error fetching dictionary:', error);
      } finally {
        isLoading.current = false;
      }
    };

    fechDic();
  }, [pathName.lang]);
  return (
    <>
      {langData ? (
        <div
          className={`w-full ${
            height ? 'min-h-screen' : ''
          } flex items-center justify-center`}
        >
          <main className='flex flex-col items-center justify-center space-y-5'>
            <Image src={img} alt='img' width={300} height={300} />
            {/* <h1 className={`text-5xl font-bold text-${color?color:'black'}`}>
        Alt-Mariendorf 32, 12107 Berlin, Germany
        </h1> */}
            {/* {contact?
    
        <h1 className={`text-5xl font-bold text-${color?color:'black'}`}>{langData.comingSoon.title}</h1>
        
      } */}
            <p className={`text-xl text-${color ? color : 'black'}`}>
              Alt-Mariendorf 32, 12107 Berlin, Germany
            </p>
          </main>
        </div>
      ) : (
        layout(color, height)
      )}
    </>
  );
}
const layout = (color: any, height: any) => (
  <div
    className={`w-full ${
      height ? 'min-h-screen' : ''
    } flex items-center justify-center`}
  >
    <main className='flex flex-col items-center justify-center space-y-5'>
      <Image src={img} alt='img' width={300} height={300} />
      {/* <h1 className={`text-5xl font-bold text-${color?color:'black'}`}>{comingSoon.title}</h1> */}
      {/* <p className={`text-xl text-${color?color:'black'}`} >{comingSoon.desc}</p> */}
      <p className={`text-xl text-${color ? color : 'black'}`}>
        am Checkpoint Charlie, Zimmerstraße 19, 10969 Berlin, Germany
      </p>
    </main>
  </div>
);
