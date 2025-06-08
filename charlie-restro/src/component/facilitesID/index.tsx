'use client'
import React, { useState, useEffect } from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { url } from 'inspector';
import { FaWhatsapp } from "react-icons/fa6";
import ContactForm from '../contactss';
import Link from 'next/link';
import TapasMundoS from '../servicesP';

const OurServicesID = (props: any) => {
  const langData = props.langData;

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
  const contact = {
    whatsApp: 'https://wa.me/+493025294284?text=Hallo%20Tapas%20-%20Mundo%20-%20Checkpoint%20Charlie%20Team',
  }
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
  const servicesData = {
    title: langData.title,
    introduction: langData.introduction,
    services: [
      {
        path: 'essbereich',
        title: langData.services[0].title,
        description: langData.services[0].description,
        image: '/image/service/dining.webp',
        more:props.inservice[0]
      },
      {
        path: 'bar-mit-vollem-service',
        title: langData.services[1].title,
        description: langData.services[1].description,
        image: '/image/service/bar.webp',
        more:props.inservice[1]
      },
      {
        path: 'veranstaltungsraume',
        title: langData.services[2].title,
        description: langData.services[2].description,
        image: '/image/service/events.webp',
        more:props.inservice[2]
      },
      {
        path: 'private-gruppe',
        title: langData.services[3].title,
        description: langData.services[3].description,
        image: '/image/service/party.webp',
        more:props.inservice[3]
      },
      {
        path: 'wahle-uns',
        title: langData.services[4].title,
        description: langData.services[4].description,
        image: '/image/service/why.png',
        more:props.inservice[4]
      },
    ],
    contact: {
      message: langData.contact.message,
    },
  };

  const pathname = usePathname();
  const selectedServicePath = pathname.split('/').pop();
  const selectedService = servicesData.services.find(
    (service) => service.path === selectedServicePath
  );

  return (
    <div style={{ backgroundColor: '#d8cfbe' }} className='w-full'>
      <div style={{ backgroundImage: `url(${selectedService?.image})` }} className={styles.background}>

        <div className={styles.bgBack}>
          <div className='bg-dark pt-20 pb-20'>
            <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='bg-opacity-60 rounded-lg p-6 text-center'>
                <h2 className='text-3xl text-center sm:text-4xl font-bold text-gray-100 mb-4'>
                  {servicesData.title}
                </h2>
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

      {selectedService ? (
        <div className='max-w-screen-xl mx-auto flex flex-wrap lg:flex-nowrap'>
          <div className='w-full m-auto lg:w-full p-4 py-6'>
            <div
              style={{ margin: 'auto' }}
              className='rounded-lg text-[#0f414c] flex items-center justify-center'
            >
              <div className='mx-auto flex lg:flex-row flex-col  p-4 bg-white rounded-lg'>
              <div className='mx-auto lg:w-2/3 h-full  p-4 bg-white rounded-lg'>
                <h1 className='text-3xl text-center bg-[gold] py-2 rounded sm:text-3xl font-bold mb-4'>
                  {selectedService.title}
                </h1>
                {/* <FormatTextContainer text={selectedService.description} /> */}
                <TapasMundoS data={selectedService.more}/>

              </div>
              <div className=' lg:w-1/3 mt-6  m-auto' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>

<div
  className={` w-full rounded-lg p-6 text-center`}
>
  <p  className='text-2xl sm:text-2xl font-semibold mb-4'>
    CONTACT US
  </p>
  <p className='text-sm text-left sm:text-md'>
    {servicesData.contact.message}
  </p>
  <div className='w-full text-center pt-4' style={{ display: 'flex', justifyContent: 'center', margin: 'auto' }}>
  <Link className='px-3 py-2'  style={{display:'flex',justifyContent:'center',margin:'auto',color:'#25D366' ,borderRadius:'10px',border:'2px solid #25D366'}} href={contact.whatsApp}>
      <FaWhatsapp size={26} color='#25D366'/>&nbsp; WhatsApp <br />
      </Link>
  </div>
  <br />
  Or
  <br />
  <ContactForm />
</div>
</div>
              </div>
               
            </div>
          </div>
        </div>
      ) : (
        <div className='text-center py-10'>
          <p className='text-xl text-gray-700'>Service not found.</p>
        </div>
      )}


    </div>
  );
};

export default OurServicesID;
