'use client'
import { getDictionary } from '@/getDictionary';
import { useParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import  ReserveTable  from '../reserveTable';

export default function RegwithLang() {
  const pathName:any = useParams();
  const isLoading = useRef(false);
  const [langData, setLangData]:any = useState(null);

  useEffect(() => {
    const fechDic = async () => {
      if (isLoading.current) return;
      isLoading.current = true;

      try {
        const data = await getDictionary(pathName.lang);
        setLangData(data);
      } catch (error) {
        console.error('Error fetching dictionary:', error);
      } finally {
        isLoading.current = false;
      }
    };

    fechDic();
  }, [pathName.lang]);

  return (
    <>
      {langData ? (
        <ReserveTable langData={langData.reserve} />
      ) : (
        <div></div>
      )}
    </>
  );
}
