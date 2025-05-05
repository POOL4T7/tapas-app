'use client'
import React, { useState, useEffect, useRef } from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Drawer } from '@mui/material';
import { IoClose } from 'react-icons/io5';
import { MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md';
import Link from 'next/link';
import { FaWhatsapp } from "react-icons/fa6";


const OurServices = (props: any) => {
  const langData = props.langData;
  const lang = props.lang;
  const path = usePathname()

  const servicesData = {
    title: langData.title,
    introduction: langData.introduction,
    services: [
      {
        path: 'essbereich',
        title: langData.services[0].title,
        description: langData.services[0].description,
        image: `/image/alt/facilites/dining.jpg`,
      },
      {
        path: 'bar-mit-vollem-service',
        title: langData.services[1].title,
        description: langData.services[1].description,
        image: `/image/alt/facilites/servicebar.jpg`,
      },
      {
        path: 'veranstaltungsraume',
        title: langData.services[2].title,
        description: langData.services[2].description,
        image: `/image/alt/facilites/events.jpg`,
      },
      {
        path: 'private-gruppe',
        title: langData.services[3].title,
        description: langData.services[3].description,
        image: `/image/alt/facilites/parties.jpg`,
      },
      {
        path: 'wahle-uns',
        title: langData.services[4].title,
        description: langData.services[4].description,
        image: `/image/alt/facilites/why.jpg`,
      },
      {
        path: 'all-you-can-eat-brunch',
        title: langData.services[5].title,
        description: langData.services[5].description,
        image: `/image/alt/facilites/brunch.jpg`,
      },
      {
        path: 'fruhstuck',
        title: langData.services[6].title,
        description: langData.services[6].description,
        image: `/image/alt/facilites/breakfast.jpg`,
      },
    ],
    contact: {
      message: langData.contact.message,
    },
  };
  const contact = {
    whatsApp: 'https://wa.me/+493025294284?text=Hallo%20Tapas%20-%20Mundo%20-%20Alt-Mariendorf%20Team',
  }

  const decodeHtml = (html: string) => {
    const entities: { [key: string]: string } = {
      '&amp;': '&',
      '&lt;': '<',
      '&gt;': '>',
      '&quot;': '"',
      '&apos;': "'",
      // Add more entities as needed
    };

    return html.replace(
      /&[a-zA-Z0-9#]+;/g,
      (match) => entities[match] || match
    );
  };

  const FormatTextContainer = ({ text }: { text: string }) => {
    const formatText = (text: string) => {
      // Decode HTML entities first
      const decodedText = decodeHtml(text);

      // Split the text by '###' to separate sections
      const sections = decodedText
        .split('###')
        .filter((section) => section.trim() !== '');

      return sections.map((section, index) => {
        // Check if the section contains '**' for bold text
        const parts = section.split('**');
        const formattedSection = parts.map((part, partIndex) => {
          if (partIndex % 2 === 1) {
            // For bold parts
            return <article key={partIndex}>{part.trim()}</article>;
          }
          // For regular parts
          return <span key={partIndex}>{part.trim()}</span>;
        });

        // Determine if we need to display bullet points
        const boldItems = formattedSection.filter(
          (item) => typeof item === 'object' && item.type === 'article'
        );
        const isBulletPoint = boldItems.length > 1;

        return (
          <div key={index} className='my-2'>
            {isBulletPoint ? (
              <ul className='list-disc pl-5'>
                {formattedSection.map((item, i) => {
                  // Render only bold items in list
                  return typeof item === 'object' && item.type === 'article' ? (
                    <li key={i}>{item}</li>
                  ) : null;
                })}
              </ul>
            ) : (
              <p>{formattedSection}</p>
            )}
          </div>
        );
      });
    };

    return <div>{formatText(text)}</div>;
  };

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleSectionClick = (index: number) => {
    setIsDrawerOpen(false);

    // Scroll to the corresponding section with an offset
    if (sectionRefs.current[index]) {
      const element = sectionRefs.current[index];
      const offset = 12 * 16; // 8rem converted to pixels (1rem = 16px by default)
      if (element) {

        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
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

  return (
    <div style={{ backgroundColor: '#d8cfbe' }} className='w-full'>
      <div className={styles.background}>
        <div className={styles.bgBack}>
          <div className='bg-dark pt-20 pb-20'>
            <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='bg-opacity-60 rounded-lg p-6 text-center'>
                <h1 className='text-3xl sm:text-4xl font-bold text-gray-100 mb-4'>
                  {servicesData.title}
                </h1>
                <p
                  className='text-sm sm:text-lg text-gray-200'
                  dangerouslySetInnerHTML={{
                    __html: servicesData.introduction,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Drawer Toggle Button */}
      <div
        onClick={() => setIsDrawerOpen(true)}
        style={{
          position: 'fixed',
          paddingRight: '15px',
          borderRadius: '10px',
          borderEndEndRadius: '0px',
          borderStartEndRadius: '0px',
          cursor: 'pointer',
          right: '0px',
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: 'gold',
          color: 'black',
          zIndex: '10',
        }}
        className='flex space-y-4'
      >
        <div className='flex text-center justify-center items-center p-2'>
          <MdOutlineKeyboardDoubleArrowLeft color='black' />
        </div>

        <div className='flex flex-col items-center !m-0 !py-1'>
          {langData.facilitiesH.map((facility: any, index: any) => (
            <div key={index} className='text-center'>
              {facility}
            </div>
          ))}
        </div>
      </div>

      {/* Drawer */}
      <Drawer
        anchor='right'
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: isMobile ? '90%' : '35%',
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(40px) brightness(115%)',
          },
        }}
      >
        <div style={{ padding: '20px' }}>
          <div
            style={{ position: 'absolute', right: '5px', cursor: 'pointer' }}
          >
            <IoClose
              color='white'
              size={30}
              onClick={() => setIsDrawerOpen(false)}
            />
          </div>

          <h3 className=' text-xl font-normal py-2 text-[gold]'>
            {servicesData.title || 'Category'}
          </h3>
          {servicesData.services.map((service: any, index: number) => (
            <h6
              key={index}
              className='text-lg sm:text-xl font-medium text-white hover:text-[gold] transition-colors duration-200'
              onClick={() => handleSectionClick(index)}
              style={{
                cursor: 'pointer',
                margin: '10px 0',
                borderBottom: '1px solid white',
                paddingBottom: '10px',
              }}
            >
              {service.title}
            </h6>
          ))}
        </div>
      </Drawer>

      {/* Content */}
      {servicesData.services.map((data: any, index: number) => (
        <div
          key={index}
          ref={(el: any) => (sectionRefs.current[index] = el)}
          className={`max-w-screen-xl mx-auto flex flex-wrap lg:flex-nowrap ${index % 2 === 0 ? '' : 'flex-row-reverse'
            }`}
        >
          <div className='w-full lg:w-1/2 p-4 py-6'>
            {/* Image Section */}
            <div
              style={{ height: '25rem' }}
              className='flex items-center justify-center'
            >
              <div className='relative w-full h-full'>
                <Image
                  loading='lazy'
                  quality={100}
                  src={data.image}
                  alt='Image'
                  layout='fill'
                  objectFit='cover'
                  className={`${styles.outlineC} rounded-lg`}
                />
              </div>
            </div>
          </div>
          <div className='w-full m-auto lg:w-1/2 p-4 py-6'>
            {/* Detail Section */}
            <div
              style={{ margin: 'auto' }}
              className=' rounded-lg text-[#0f414c] flex items-center justify-center'
            >
              <div className='max-w-xl mx-auto p-4 bg-white shadow-md rounded-lg'>
                <h2 className='text-xl font-semibold mb-4'>{data.title}</h2>
                <FormatTextContainer text={data.description} />
                <div className='w-full m-auto' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>

                  <Link href={`${path}/${data.path}`}>
                    <button className=' px-2' style={{ borderRadius: '5px', borderBottom: '1px solid #0f414c' }}>View More</button>
                  </Link>
                  <Link href={contact.whatsApp}>
                    <FaWhatsapp size={26} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className='bg-dark pt-32 pb-32'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div
            className={`${styles.bgg} bg-opacity-60 rounded-lg p-6 text-center`}
          >
            <p className='text-3xl sm:text-4xl font-bold text-gray-100 mb-4'>
              Contact us
            </p>
            <p className='text-sm sm:text-lg text-gray-200'>
              {servicesData.contact.message}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
