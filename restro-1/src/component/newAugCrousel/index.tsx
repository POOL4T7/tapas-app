'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@nextui-org/react';
import BookingWidget from '../bookingwidge';

interface Slide {
  name: string;
  title: string;
  banner: string;
  button1: string;
  button2: string;
  desc: string;
  desc2: string;
}

const NewAugCarousel = (params: any) => {
  const langData = params.langData;

  const [currentIndex, setCurrentIndex] = useState(0);
  const slides: Slide[] = [
    {
      name: 'Slide 1',
      title: langData[0].title,
      banner: `/image/alt/banner/slide1.jpg`,
      button1: langData[0].button1,
      button2: langData[0].button2,
      desc: langData[0].desc,
      desc2: '',
    },
    {
      name: 'Slide 2',
      title: langData[1].title,
      banner: `/image/alt/banner/slide2.jpg`,
      button1: langData[1].button1,
      button2: langData[1].button2,
      desc: langData[1].desc,
      desc2: '',
    },
    {
      name: 'Slide 3',
      title: langData[2].title,
      banner: `/image/alt/banner/slide3.jpg`,
      button1: langData[2].button1,
      button2: langData[2].button2,
      desc: langData[2].desc,
      desc2: '',
    },
    {
      name: 'Slide 4',
      title: langData[3].title,
      banner: `/image/alt/banner/slide4.jpg`,
      button1: langData[3].button1,
      button2: langData[3].button2,
      desc: langData[3].desc,
      desc2: '',
    },
    {
      name: 'Slide 5',
      title: langData[3].title,
      banner: `/image/alt/banner/slide5.jpg`,
      button1: langData[3].button1,
      button2: langData[3].button2,
      desc: langData[3].desc,
      desc2: '',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const contact = {
    whatsApp:
      'https://wa.me/+493025294284?text=Hallo%20Tapas%20-%20Mundo%20-%20Alt-Mariendorf%20Team',
  };

  return (
    <div className='relative w-full h-screen overflow-hidden'>
      <div
        className='flex transition-transform duration-500 ease-in-out'
        style={{
          transform: `translateX(-${currentIndex * 100}vw)`,
          willChange: 'transform',
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className='w-screen h-screen flex-shrink-0 relative'>
            <motion.img
              src={slide.banner}
              alt={slide.name}
              className={`absolute top-0 left-0 w-screen h-screen object-cover ${
                index === 4 ? 'object-center' : 'object-top'
              }`}
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.02, 1] }}
              transition={{
                duration: 6,
                ease: 'easeInOut',
                repeat: Infinity,
              }}
            />
            <div className='absolute inset-0 w-full  bg-opacity-50 flex items-center justify-center'>
              <motion.div
                className='text-center'
                initial={{ scale: 1 }}
                animate={{
                  scale: [1, 1.05],
                  transition: {
                    duration: 1,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  },
                }}
              >
                {index==0?<h1 className='text-white text-3xl md:text-5xl lg:text-6xl font-bold mb-4'>
                  {slide.title}
                </h1>:<h2 className='text-white text-3xl md:text-5xl lg:text-6xl font-bold mb-4'>
                  {slide.title}
                </h2>}
                <p className='text-white text-lg mb-4 px-5'>{slide.desc}</p>
                <p className='text-white text-sm mb-8 px-5'>{slide.desc2}</p>
                <div className='space-x-4 px-5 flex items-center justify-center'>
                  <BookingWidget
                    bottom={false}
                    popup={false}
                    header={false}
                    banner={true}
                    langData={slide}
                  />
                  {slide.button2 && (
                    <Link target='_blank' href={contact.whatsApp}>
                      <Button className='bg-[gold] text-black px-3 py-1.5 md:px-4 md:py-2 rounded text-sm md:text-base'>
                        {slide.button2}
                      </Button>
                    </Link>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className='absolute top-1/2 left-2 text-white text-2xl transform -translate-y-1/2 p-2 rounded-full hover:bg-[gold] focus:outline-none'
      >
        &#8249;
      </button>
      <button
        onClick={nextSlide}
        className='absolute top-1/2 right-2 text-white text-2xl transform -translate-y-1/2 p-2 rounded-full hover:bg-[gold] focus:outline-none'
      >
        &#8250;
      </button>
    </div>
  );
};

export default NewAugCarousel;
