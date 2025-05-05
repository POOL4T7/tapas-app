'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { SiWhatsapp } from 'react-icons/si';


const WhatsAppIcon = () => {
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
  const contact={
    whatsApp: 'https://wa.me/+493025294284?text=Hallo%20Tapas%20-%20Mundo%20-%20Alt-Mariendorf%20Team',
  }
  return (
    <div  className="rounded-full inline-block cursor-pointer">
      <Link target='_blank' href={contact.whatsApp}>
      <div className="bg-black bg-opacity-30 backdrop-blur-lg rounded-full p-2 hover:bg-opacity-80">
        <SiWhatsapp  color='white' size={30}  />
      </div>
      </Link>
    </div>
  );
}

export default WhatsAppIcon;
