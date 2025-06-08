'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';
import dynamic from 'next/dynamic';
import style from './styles.module.css';

import { getAllMenuList, getCategory, getCategoryPath } from '@/service/apiService';
import { LoadingSkeleton } from '@/layouts/Loader';

const MenuCardAll = dynamic(() => import('@/component/dishCard'), {
  loading: () => <LoadingSkeleton />,
});

const RegwithLang = dynamic(() => import('@/component/RegwithLang'), {
  ssr: false,
});

const ClientMenuCards: React.FC = () => {
  const [menuId, setMenuId] = useState(1);
  const [category, setCategory] = useState('');
  const [details, setCategoryDetails] = useState({ name: '', desc: '' });
  const pathname = usePathname();
  const selector: any = useSelector((data: any) => data.menu);
  const path = pathname.split('/');

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const menuList = await getAllMenuList();
        const menuCategory = await getCategory();

        const foundCategory = menuCategory?.data?.find(
          (item: any) => encodeURIComponent(item.tagName) === path.at(-1)
        );

        if (foundCategory) {
          setCategoryDetails({ name: foundCategory.name, desc: foundCategory.description });
        } else {
          console.warn('Category not found!');
        }

        const menu = menuList.data.find(
          (item: any) => encodeURIComponent(item.tagName) === path.at(-2)
        );

        if (menu) {
          const result = await getCategoryPath(menu.id);
          const categoryRes = result.data.find(
            (item: any) => encodeURIComponent(item.tagName) === path.at(-1)
          );

          setMenuId(menu.id);
          setCategory(categoryRes);
        }
      } catch (error) {
        console.error('Error fetching dishes:', error);
      }
    };

    fetchDishes();
  }, [pathname]);

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
    <>
      <div className={`${style.bg} flex flex-col md:flex-row`}>
        <div className="flex flex-col w-full">
          <div className="md:w-full">
            <MenuCardAll dish={category} details={details} />
          </div>
        </div>
      </div>
      <RegwithLang />
    </>
  );
};

export default ClientMenuCards;
