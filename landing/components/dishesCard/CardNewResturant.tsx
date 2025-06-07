'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import style from './style.module.css'
import { Image } from '@nextui-org/react';
interface Card{
    link:string;
    image:string;
    name:string;
}
const CardNewResturant = ({link,image,name}:Card) => {

  const [outlineColor, setOutlineColor]:any = useState();

  const handleMouseEnter = () => {
      setOutlineColor(getRandomColor());
  };

  const handleMouseLeave = () => {
      setOutlineColor(null);
  };
  return (
    <div
            className={style.imageDiv}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ outline: outlineColor ? `2px solid ${outlineColor}` : 'none', outlineOffset: '4px' }}
        >
            <Link href={link}>
                <Image
                    isZoomed
                    loading='lazy'
                    width={350}
                    height={300}
                    alt='img'
                    className="m-5"
                    src={image}
                />
            </Link>
        </div>
  )
}

export default CardNewResturant;


 function getRandomColor() {
  const colors = ['#0d9bed', '#b264ea', '#f56e7d', '#feac55', '#fc5c3a', '#fdc900'];
  return colors[Math.floor(Math.random() * colors.length)];
}