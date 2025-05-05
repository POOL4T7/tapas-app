'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';

// const data= {
//   "message": "Wir verwenden Cookies, um Ihre Erfahrung zu verbessern und den Verkehr auf unserer Website zu analysieren. Durch Klicken auf ",
//   "message2":"stimmen Sie der Verwendung von Cookies zu.",
//   "acceptButton": "Akzeptieren",
//   "privacyPolicy": "Für weitere Informationen über unsere Cookie-Richtlinie und wie wir Ihre Privatsphäre schützen, lesen Sie bitte unsere ",
//   "pbtn":"Datenschutzerklärung "
// }

const COOKIE_NAME = 'cookieConsent';
const COOKIE_VALUE = 'accepted';
const COOKIE_EXPIRY_DAYS = 365; // 1 year

const setCookie = (name: string, value: string, days: number) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
};

const getCookie = (name: string): string | undefined => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift();
};

const CookieConsent= ({data}:any) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const cookieConsent = getCookie(COOKIE_NAME);
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    setCookie(COOKIE_NAME, COOKIE_VALUE, COOKIE_EXPIRY_DAYS);
    setIsVisible(false);
  };

  const pathname = usePathname();
  const language = pathname.split("/").filter(Boolean); // Remove empty strings
  const firstSegment = language.find((segment) => ["en", "de", "es"].includes(segment)) || "de";


  if (!isVisible) return null;

  return (
<div style={{ zIndex: '10' }} className="fixed bottom-0 left-0 right-0 bg-white text-black py-4 px-6 flex flex-col md:flex-row justify-center items-center text-xs md:text-sm">
  <p className="text-xs md:text-sm mb-2 md:mb-0 flex flex-col md:flex-row items-center">
    <div className='flex-col'>

    <p>
    {data.message}
    <button className='text-[#gold] mx-1 md:mx-1 cursor-pointer	' onClick={handleAccept}>
    {data.acceptButton}
    </button>

    {data.message2}
    </p>
    <p className='text-xs md:text-sm mb-2 md:mb-0 flex flex-col md:flex-row items-center'>
    <div className='flex'>
    <p className="text-[0.6rem] md:text-sm mt-1 md:mt-0 md:ml-4">{data.privacyPolicy}
    <Link href={`/${firstSegment ? firstSegment + '/' : ''}datenschutzrichtlinie`} className="underline text-[#gold] ml-1 md:ml-2 cursor-pointer	">
     {data.pbtn} 
     </Link>.
    </p>
     </div>
    </p>
    </div>
  </p>
  <button
    onClick={handleAccept}
    className="bg-[gold] text-[black] px-3 py-1 rounded mt-2 md:mt-0 md:ml-4 text-xs md:text-sm cursor-pointer	"
  >
    {data.acceptButton}
  </button>
</div>

  
  );
};

export default CookieConsent;
