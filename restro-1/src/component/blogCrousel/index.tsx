'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Link from 'next/link';

export default function BlogCr({ slidesData }: any) {

  return (
    <div className="w-full h-[30rem] my-2 bg-gray-200 flex items-center justify-center p-4">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="w-full h-full"
        breakpoints={{
          // when the viewport width is >= 640px
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          // when the viewport width is < 640px
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
      >
        {slidesData.map((slide: any, index: any) => (
          <SwiperSlide key={index} className="group relative">
            <Link href={slide.url}>
              <div className="relative w-full h-full bg-gray-400 rounded-lg flex items-end justify-center overflow-hidden">
                {/* Add Image */}
                <motion.img src={slide.imageUrl} alt={`Dish ${index + 1}`} className="w-full rounded-lg h-full object-cover" />
                <div className="absolute rounded-lg bottom-[2%] w-[96%] bg-white text-gray text-center transition-all duration-300 ease-in-out h-[15%] group-hover:h-[60%]">
                  <div className="m-2 p-2">
                    <h3 className="text-lg font-semibold">{slide.title}</h3>
                    <p className="mt-2 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
