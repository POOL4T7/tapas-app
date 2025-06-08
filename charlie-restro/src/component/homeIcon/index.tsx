'use client'
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaHome } from "react-icons/fa";

const HomeIcon = () => {
  const params=useParams()
  const [isMobile, setIsMobile] = useState(false);

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
    <div  className="rounded-full inline-block cursor-pointer">
      <Link href={`/${params.lang}`}>
      <div className="bg-black bg-opacity-30 backdrop-blur-lg rounded-full p-2 hover:bg-opacity-80">
        <FaHome size={30} color="white" />
      </div>
      </Link>
    </div>
  );
}

export default HomeIcon;
