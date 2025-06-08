"use client";

import React, { useEffect, useState, useRef } from 'react';
import { PiTextAaBold } from "react-icons/pi";
import Link from 'next/link';
import styles from './styles.module.css';
import { useParams, usePathname } from 'next/navigation';
import { getDictionary } from '@/getDictionary';

const LanguageIcon = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedLang, setSelectedLang] = useState('en');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownButtonRef = useRef<HTMLButtonElement>(null);
  const dropdownMenuRef = useRef<HTMLDivElement>(null);



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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownButtonRef.current &&
        !dropdownButtonRef.current.contains(event.target as Node) &&
        dropdownMenuRef.current &&
        !dropdownMenuRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  const [items, setItems] = useState(
    [
      { key: "de", label: "German", icon: <PiTextAaBold /> },
      { key: "en", label: "English", icon: <PiTextAaBold /> },
      { key: "es", label: "Spanish", icon: <PiTextAaBold /> }
    ]
  )

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const params: any = useParams()
  const pathname = usePathname(); 
  const path = pathname.split('/');
  const isLangCode = ["en", "de", "es"].includes(path[1]);
  const newPath = isLangCode ? path.slice(2).join('/') : path.slice(1).join('/');

  
  
  const isLoading = useRef(false);
  const [langData, setLangData]: any = useState(null);

  const comingSoon1 = {
    title: 'Coming Soon',
    desc: 'Stay tuned! Something awesome is on its way.'
  }

  useEffect(() => {
    const fechDic = async () => {
      if (isLoading.current) return;
      isLoading.current = true;

      try {
        const data = await getDictionary(params.lang);
        setLangData(data);

        setItems([
          { key: "de", label: data.langAll[1], icon: <PiTextAaBold /> },
          { key: "en", label: data.langAll[0], icon: <PiTextAaBold /> },
          { key: "es", label: data.langAll[2], icon: <PiTextAaBold /> }
        ])
      } catch (error) {
        console.error('Error fetching dictionary:', error);
      } finally {
        isLoading.current = false;
      }
    };

    fechDic();
  }, [langData]);




  return (
    <div className="relative inline-block text-left">
      <button
        ref={dropdownButtonRef}
        onClick={toggleDropdown}
        className="p-2 bg-black bg-opacity-30 backdrop-blur-lg rounded-full hover:bg-opacity-80"
      >
        <PiTextAaBold size={30} color="white" />
      </button>
      {isDropdownOpen && (
        <div
          ref={dropdownMenuRef}
          style={{ width: 'fit-content', color: 'white', background: 'rgba(0,0,0,0.8)' }}
          className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
        >
          <div className="py-2" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {items.map((item) => (
              <Link
                href={`/${item.key}/${newPath}`}
                key={item.key}
              >                <div
                onClick={() => setSelectedLang(item.key)}
                className="flex items-center px-4 py-2 text-sm hover:text-[#ffca0a] cursor-pointer"
                role="menuitem"
              >
                  {item.icon}
                  <span className="ml-2">{item.label}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageIcon;
