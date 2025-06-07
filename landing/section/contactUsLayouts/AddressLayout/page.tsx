'use client';
import React from 'react';
import { FaMobileAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { FaSquareWhatsapp } from 'react-icons/fa6';
import style from './style.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { CiMail } from 'react-icons/ci';
import LocationSection from '@/components/map/map';

const OurAddress = (props: any) => {
  const langData = props.langData;
  const contact = {
    RestwhatsApp:
      'https://wa.me/+493025294284?text=Hallo%20Tapas%20-%20Mundo%20-%20Alt-Mariendorf%20Team',
    RestwhatsApp2:
      'https://wa.me/+493025294284?text=Hallo%20Tapas%20-%20Mundo%20-%20Checkpoint%20Charlie%20Team',
    RestwhatsApp3:
      'https://wa.me/+493025294284?text=Hello%20Tapas%20-%20Mundo%20-%20Potsdamer%20Platz%20Team',
  };

  const AddressData = {
    title: langData.title,
    introduction: '',
    Address: [
      {
        title: langData.AddressList[0].title,
        heading: langData.AddressList[0].heading,

        description: langData.AddressList[0].description,
        place: 'Alt-Mariendorf',
        location: 'https://maps.app.goo.gl/38V3p3ZTSnN3Kaoy8',
        phoneNumber: '+49-171123456',
        whatsAppNumber: contact.RestwhatsApp,

        image: '/image/newRes/1.webp',
        alt: 'mundo alt mariendorf',
      },
      {
        title: langData.AddressList[1].title,
        heading: langData.AddressList[1].heading,
        place: 'Checkpoint Charlie',
        phoneNumber: '+49-171123456',
        location: 'https://maps.app.goo.gl/fjEXA7eKnYnpJpY98',
        whatsAppNumber: contact.RestwhatsApp2,
        description: langData.AddressList[1].description,
        image: '/image/newRes/2.webp',
        alt: 'Mundo checkpoint charlie',
      },
      {
        title: langData.AddressList[2].title,
        heading: langData.AddressList[2].heading,

        place: 'Potsdamer Platz',
        phoneNumber: '+49-171123456',
        location: '',
        whatsAppNumber: contact.RestwhatsApp3,
        description: langData.AddressList[2].description,
        image: '/image/newRes/3.webp',
        alt: 'Potsdamer Platz',
      },
    ],
    contact: {
      message: langData.contact.message,
    },
  };

  return (
    <div className={`${style.main} w-full`}>
      <div className=' max-w-screen-xl mx-auto flex flex-wrap p-6 text-center'>
        {/* <h1 className={style.heading}>{AddressData.title}</h1> */}
      </div>
      <div className={`${style.container} max-w-screen-xl mx-auto`}>
        {AddressData.Address.map((data, index) => (
          <div key={index} className={style.wrapper}>
            <div className={style.cardAddress} key={index}>
              <div className={style.top}>
                <div className={style.image}>
                  <Image
                    alt={data.alt}
                    quality={100}
                    width={300}
                    height={300}
                    style={{ width: '100%' }}
                    src={data.image}
                    loading='lazy'
                  />
                </div>
              </div>
              <div className={style.bottom}>
                {/* <div  className={style.heading}>Mundo</div> */}
                <div
                  className={style.heading}
                  dangerouslySetInnerHTML={{ __html: data.heading }}
                />
                <div className={style.icons}>
                  <Link  target='_blank' href={data.location}>
                    <div title={'Location'} className={style.icon}>
                      <FaLocationDot size={35} color='white' />
                    </div>
                  </Link>
                  <Link  target='_blank' href={data.whatsAppNumber}>
                    <div title={'Whatsapp'} className={style.icon}>
                      <FaSquareWhatsapp size={35} color='#25D366' />
                    </div>
                  </Link>
                  <Link  target='_blank' href={'#'}>
                    <div title={'Email'} className={style.icon}>
                      <CiMail size={35} color='white' />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <LocationSection/>
      <div className='bg-dark pt-32 pb-32'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div
            style={{ backgroundColor: 'rgba(0, 0, 0, .7)' }}
            className='rounded-lg p-4 text-center'
          >
            <p style={{ fontSize: '1.6rem' }} className='text-white'>
              {AddressData.contact.message}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurAddress;
