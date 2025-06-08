'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BookingWidget from '../bookingwidge';
import Link from 'next/link';
import { Button } from '@nextui-org/react';
import Image from 'next/image';

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
  const [isManual, setIsManual] = useState(false);

  const imagesU = [
    '/image/crousel/slide1.webp',
    '/image/crousel/slide2.webp',
    '/image/crousel/slide3.webp',
    '/image/crousel/slide4.webp',
    '/image/crousel/slide5.webp',
  ];

  const slides: Slide[] = [
    {
      name: 'Slide 1',
      title: langData[0].title,
      banner: imagesU[0],
      button1: langData[0].button1,
      button2: '',
      desc: langData[0].desc,
      desc2: '',
    },
    {
      name: 'Slide 2',
      title: langData[1].title,
      banner: imagesU[1],
      button1: langData[1].button1,
      button2: '',
      desc: langData[1].desc,
      desc2: '',
    },
    {
      name: 'Slide 3',
      title: langData[2].title,
      banner: imagesU[2],
      button1: langData[2].button1,
      button2: langData[2].button2,
      desc: langData[2].desc,
      desc2: '',
    },
    {
      name: 'Slide 4',
      title: langData[3].title,
      banner: imagesU[3],
      button1: langData[3].button1,
      button2: langData[3].button2,
      desc: langData[3].desc,
      desc2: '',
    },
    {
      name: 'Slide 5',
      title: langData[4].title,
      banner: imagesU[4],
      button1: langData[4].button1,
      button2: '',
      desc: langData[4].desc,
      desc2: '',
    },
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (!isManual) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 6000);
    }

    return () => clearInterval(interval);
  }, [currentIndex, isManual, slides.length]);

  const resetAutoSlide = () => {
    setIsManual(true);
    setTimeout(() => {
      setIsManual(false);
    }, 6000); // Reset back to auto-slide after 10 seconds of manual interaction
  };

  const prevSlide = () => {
    resetAutoSlide();
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const nextSlide = () => {
    resetAutoSlide();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const contact = {
    whatsApp:
      'https://wa.me/+493025294284?text=Hallo%20Tapas%20-%20Mundo%20-%20Checkpoint%20Charlie%20Team',
  };

  const textAnimation = {
    hidden: { opacity: 0, x: '100%' },
    visible: { opacity: 1, x: '0%' },
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
            <Image
              quality={100}
              width={800}
              height={600}
              src={slide.banner}
              alt={slide.name || 'img'}
              className={`absolute top-0 left-0 w-screen h-screen object-cover ${
                index === 4 ? 'object-center' : 'object-top'
              }`}
            />
            <div className='absolute inset-0 w-full  bg-opacity-50 flex items-center justify-center'>
              <div className='text-center'>
                {index==0?
                <motion.h1
                className='text-white text-3xl md:text-5xl lg:text-6xl font-bold mb-4'
                initial='hidden'
                animate='visible'
                exit='hidden'
                transition={{ duration: 1.6 }}
                variants={textAnimation}
                key={currentIndex}
              >
                {slide.title}
              </motion.h1>:<motion.h2
                  className='text-white text-3xl md:text-5xl lg:text-6xl font-bold mb-4'
                  initial='hidden'
                  animate='visible'
                  exit='hidden'
                  transition={{ duration: 1.6 }}
                  variants={textAnimation}
                  key={currentIndex}
                >
                  {slide.title}
                </motion.h2>
                }
                
                <motion.p
                  className='text-white text-lg mb-4 px-5'
                  initial='hidden'
                  animate='visible'
                  exit='hidden'
                  transition={{ duration: 1.2 }}
                  variants={textAnimation}
                  key={currentIndex + '-desc'}
                >
                  {slide.desc}
                </motion.p>
                <motion.p
                  className='text-white text-sm mb-8 px-5'
                  initial='hidden'
                  animate='visible'
                  exit='hidden'
                  transition={{ duration: 1.2 }}
                  variants={textAnimation}
                  key={currentIndex + '-desc2'}
                >
                  {slide.desc2}
                </motion.p>
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
              </div>
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
