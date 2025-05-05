'use client';

import React from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

export default function DetailsAlbum({ images }: { images: string[] }) {
  if (!images || images.length === 0) return null;

  return (
    <div className={styles.albumContainer}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            style={{ width: '400px', height: '400px', position: 'relative' }}
          >
            <Image
              src={image}
              alt={`Dish ${index + 1}`}
              width={400}
              height={400}
              quality={100}
              style={{ objectFit: 'cover' }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', right: 10 }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', left: 10, zIndex: 1 }}
      onClick={onClick}
    />
  );
}
