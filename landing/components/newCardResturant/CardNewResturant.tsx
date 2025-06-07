'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import style from './style.module.css';
import Image from 'next/image';

interface Card {
  link: string;
  image: string;
  name: string;
}

const CardNewResturant = ({ link, image, name }: Card) => {
  const [outlineColor, setOutlineColor] = useState<string | null>(null);
  const [outlineColor1, setOutlineColor1] = useState<string | null>(null);

  const handleMouseEnter = () => {
    setOutlineColor(getRandomColor());
    setOutlineColor1(getRandomColor1());
  };

  const handleMouseLeave = () => {
    setOutlineColor(null);
    setOutlineColor1(null);
  };

  const handleMouseEnterClient = () => {};

  const handleMouseLeaveClient = () => {
    setOutlineColor1(null);
  };

  return (
    <div
      className={style.main}
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
      // style={{ outline: outlineColor1 ? `2px solid ${outlineColor1}` : '4px solid #cd8a21', outlineOffset: '4px' }}
    >
      <div
        className={style.imageDiv}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        // style={{ outline: outlineColor ? `2px solid ${outlineColor}` : '4px solid #cd8a21', outlineOffset: '4px' }}
      >
        <Link  href={link}>
          <Image
            quality={100}
            width={800}
            height={600}
            alt='img'
            className='m-5'
            src={image}
            loading='lazy'
          />
        </Link>
      </div>
    </div>
  );
};

export default CardNewResturant;

function getRandomColor() {
  const colors = ['#1763d1', '#d00b96', '#0a33af'];
  return colors[Math.floor(Math.random() * colors.length)];
}
function getRandomColor1() {
  const colors = ['#ee41bd', '#eb5307', '#b264ea'];
  return colors[Math.floor(Math.random() * colors.length)];
}
