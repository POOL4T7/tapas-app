'use client';

import menuDataDummy from '@/AllData/menuList';
import { InfoMenu } from '@/component/InfoMenu';
import MenuCardAll from '@/component/dishCard';
import SpecialistCard from '@/component/specialistCard';
import DishLayouts from '@/layouts/dishLayout';
import { getCategoryPath } from '@/service/apiService';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useReducer, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import img from '../.././../../public/image/img/pexels-nesrin-danan-1657120-3193818.webp';

const MenuCards: React.FC = () => {
  const [menuId, setMenuId] = useState(1);
  const [category, SetCateogry] = useState('');
  const pathname = usePathname();
  const selector: any = useSelector((data: any) => data.menu);
  const dispach = useDispatch();
  // const [allMenu, setAllMenu]: any = useState(menuDataDummy.find((item: any) => {
  //   if (item.name == 'MENU') {
  //     return item.items
  //   }
  // }))

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const path = pathname.split('/');
        if (path[path.length - 2] === 'menu') {
          setMenuId(1);
        }

        // Ensure menuId is set before making the API call
        if (menuId !== null) {
          const result = await getCategoryPath(menuId);
          // console.log('here', menuId, result.data);

          const categoryRes = result.data.find(
            (item: any) => item.tagName === path[path.length - 1]
          );
          SetCateogry(categoryRes);
          // console.log('here', menuId, result, category);
        }
      } catch (error) {
        // console.error('Error fetching dishes:', error);
      }
    };

    fetchDishes();
  }, [pathname, menuId]);

  return (
    <div className='flex flex-col md:flex-row'>
      <div className='md:w-1/3'>
        <Image
          alt='banner'
          width={200}
          height={100}
          quality={100}
          src={'/image/img/pexels-nesrin-danan-1657120-3193818.webp'}
          className='w-full'
        />
      </div>
      <div className='md:w-2/3'>
        <MenuCardAll dish={category} />
      </div>
    </div>
  );
};

export default MenuCards;
