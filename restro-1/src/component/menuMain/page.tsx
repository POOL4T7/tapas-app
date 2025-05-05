'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { getAllMenuPath } from '@/service/apiService';
import { LoadingSkeleton } from '@/layouts/Loader';
import style from './styles.module.css';

const MenuCardAll = dynamic(() => import('@/component/dishCard'), {
  loading: () => <LoadingSkeleton />,
});

const ClientMenuCards: React.FC = () => {
  const [menuDetails, setMenuDetails] = useState({
    name: '',
    desc: '',
    id: '',
  });
  const pathname = usePathname();
  const path = pathname.split('/');

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const menuList = await getAllMenuPath();
        // const menuCategory = await getCategory();

        // const category = menuCategory?.data?.find(
        //   (item: any) => encodeURIComponent(item.name) === path.at(-1)
        // );

        const menu = menuList.data.find(
          (item: any) =>
            encodeURIComponent(item.name.toLowerCase().split(' ').join('-')) ===
            path.at(-1)
        );

        if (menu) {
          setMenuDetails({
            name: menu.name,
            desc: menu.description,
            id: menu.id,
          });
        } else {
          console.warn('Menu not found!');
        }

        if (menu) {
          // const result = await getCategoryPath(
          //   menu.name.toLowerCase().split(' ').join('-')
          // );
          // const categoryRes = result.data.find(
          //   (item: any) =>
          //     encodeURIComponent(
          //       item.name.toLowerCase().split(' ').join('-')
          //     ) === path.at(-1)
          // );
          // setCategory(categoryRes);
        }
      } catch (error) {
        console.error('Error fetching dishes:', error);
      }
    };

    fetchDishes();
  }, [pathname]);

  return (
    <div className={`${style.bg} flex  flex-col`}>
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <div className='md:w-full'>
          <MenuCardAll details={menuDetails} dish={{ items: [] }} />
        </div>
      </div>
      {/* <RegwithLang /> */}
    </div>
  );
};

export default ClientMenuCards;
