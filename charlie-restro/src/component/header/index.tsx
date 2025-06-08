'use client'
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HomeIcon from '../homeIcon';
import LanguageIcon from '../language';
import WhatsAppIcon from '../whatsApp';
import { RightSideDrawer } from '../Drawer';
import OptionIcon from '../reseveIcon';
import ReserveIcon from '../reseveIcon';

const Header = ({ LandingUrl, logo, resName ,lang ,langData }: any) => {
  const [headerBg, setHeaderBg] = useState('transparent');

  const handleScroll = useCallback(() => {
    if (window.scrollY > 10) {
      setHeaderBg('rgba(0,0,0,0.6)');
    } else {
      setHeaderBg('transparent');
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div
      className="fixed top-0 left-0 w-full flex items-center justify-between p-3 z-50 transition-colors duration-300"
      style={{ backgroundColor: headerBg }}
    >
      <Link href={LandingUrl} className="flex items-center space-x-2">
        <div className="flex flex-col items-center relative">
          <Image src={logo} height={30} width={30} style={{ height: 'auto', width: '5rem' }} alt="logo" />
        </div>
          <span className="text-[#ffca0a]  font-semibold mt-1 absolute bottom-0 text-[0.6rem] lg:text-sm ">{resName[1]}</span>
      </Link>

     {/* Menu Items for Desktop */}
     <div className="hidden lg:flex items-center space-x-4 lg:space-x-6">
        <HomeIcon />
        <ReserveIcon langData={langData} />
        <LanguageIcon />
        <WhatsAppIcon />
        <RightSideDrawer />
      </div>

      {/* Mobile Menu Items */}
      <div className="lg:hidden flex items-center space-x-2">
        <HomeIcon />
        <LanguageIcon />
        <RightSideDrawer />
      </div>
    </div>
  );
};

export default Header;
