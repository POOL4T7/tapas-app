'use client';
import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Tab, Tabs } from '@nextui-org/tabs';

const servicesData = {
  title: 'Explore Our Facilities',
  introduction:
    "Welcome to Mundo Tapas, where we blend authentic Spanish flavors with exceptional service. Whether you're dining with us, hosting a special event, or enjoying our seasonal specials, we ensure a memorable experience. Discover our offerings below:",
  services: [
    {
      path: 'diningArea',
      title: 'Dining Area',
      description:
        'Experience our vibrant dining area, where traditional Spanish decor meets modern comfort. Perfect for gatherings of any size.',
      image: '/image/img/pexels-wendywei-1546360.webp',
    },
    {
      path: 'outdoorPatio',
      title: 'Outdoor Patio',
      description:
        'Dine al fresco on our charming patio with scenic views, ideal for a relaxing meal or casual get-together.',
      image: '/image/img/pexels-vince-2876748.webp',
    },
    {
      path: 'fullServiceBar',
      title: 'Full-Service Bar',
      description:
        'Relax at our bar with a wide selection of Spanish wines, cocktails, and tapas. Perfect for starting your evening.',
      image: '/image/img/pexels-lina-1741285.webp',
    },
    {
      path: 'eventSpace',
      title: 'Event Space',
      description:
        'Host your next event in our versatile space, equipped with modern amenities and a touch of Spanish charm.',
      image: '/image/img/pexels-vince-2876748.webp',
    },
    {
      path: 'wineCellar',
      title: 'Wine Cellar',
      description:
        'Explore our exclusive wine cellar with a curated selection of fine Spanish wines, ideal for private tastings and special occasions.',
      image: '/image/img/pexels-nesrin-danan-1657120-3193818.webp',
    },
    {
      path: 'freeWiFi',
      title: 'Free Wi-Fi',
      description:
        'Stay connected with complimentary Wi-Fi available throughout our restaurant.',
      image: '/image/img/pexels-willpicturethis-2641886.webp',
    },
    {
      path: 'cleanWashrooms',
      title: 'Clean Washrooms',
      description:
        'Enjoy clean and well-maintained washrooms with modern amenities for your comfort.',
      image: '/image/img/pexels-cottonbro-4255490.webp',
    },
  ],
  contact: {
    message:
      'For more information or to make a reservation, please call us at [Phone Number] or email us at [Email Address]. We look forward to welcoming you soon!',
  },
};

const OurServices = () => {
  const pathname = usePathname();
  const path = pathname.split('/');
  const [handle, sethandle]: any = useState(path[path.length - 1]);
  const [HandleOrder, setOrder] = useState([]);

  // Function to reorder services based on the key
  const reorderServices = (services: any, key: any) => {
    const index = services.findIndex((service: any) =>
      service.path.toLowerCase().includes(key.toLowerCase())
    );
    if (index !== -1) {
      const serviceToMove = services.splice(index, 1)[0];
      return [serviceToMove, ...services];
    }

    return services;
  };

  useEffect(() => {
    sethandle(handle);
    const orderedServices = reorderServices([...servicesData.services], handle);
    setOrder(orderedServices);
  }, [handle]);

  return (
    <div className='w-full'>
      <div className={styles.background}>
        <div className={styles.bgBack}>
          <div className='bg-dark pt-20 pb-20'>
            <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='bg-gray-900 bg-opacity-60 rounded-lg p-6 text-center'>
                <h1 className='text-3xl sm:text-4xl font-bold text-gray-100 mb-4'>
                  {servicesData.title}
                </h1>
                <p className='text-sm sm:text-lg text-gray-200'>
                  {servicesData.introduction}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full max-w-screen-lg mx-auto p-4 flex justify-center'>
        <Tabs
          className='flex flex-col md:flex-row overflow-auto w-full'
          color='danger'
          onSelectionChange={sethandle}
          defaultSelectedKey={handle}
          variant='bordered'
          aria-label='Tabs variants'
        >
          {servicesData.services.map((item, key) => (
            <Tab key={item.path} title={item.title} />
          ))}
        </Tabs>
      </div>

      {HandleOrder.map((data: any, index: any) => (
        <div
          key={index}
          className={`max-w-screen-xl mx-auto flex flex-wrap lg:flex-nowrap ${
            index % 2 === 0 ? '' : 'flex-row-reverse'
          }`}
        >
          <div className='w-full lg:w-1/2 p-4'>
            {/* Image Section */}
            <div
              style={{ height: '25rem' }}
              className=' flex items-center justify-center'
            >
              <div className='relative w-full h-full'>
                <Image
                  src={data.image}
                  alt='Image'
                  layout='fill'
                  objectFit='cover'
                  className='rounded-lg'
                />
              </div>
            </div>

            <div className='flex flex-wrap gap-4'></div>
          </div>
          <div className='w-full lg:w-1/2 p-4'>
            {/* Detail Section */}
            <div
              style={{ height: '25rem' }}
              className='bg-gray-100 flex items-center justify-center'
            >
              <div className='max-w-md mx-auto p-6 bg-white shadow-md rounded-lg'>
                <h2 className='text-xl font-semibold mb-4'>{data.title}</h2>
                <p className='text-gray-700'>{data.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className='bg-dark pt-32 pb-32'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='bg-gray-900 bg-opacity-60 rounded-lg p-6 text-center'>
            <h1 className='text-3xl sm:text-4xl font-bold text-gray-100 mb-4'>
              Contact us
            </h1>
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
