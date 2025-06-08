'use client';

import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '@/Redux/store';
import { usePathname } from 'next/navigation';
import { LoadingSkeleton } from '@/layouts/Loader';
import dynamic from 'next/dynamic';

const AllMenuCard = dynamic(() => import('@/layouts/allmenu'), {
  loading: () => <LoadingSkeleton />,
});

const ComingSoon = dynamic(() => import('@/component/commingSoon'), {
  ssr: false,
});

const RegwithLang = dynamic(() => import('@/component/RegwithLang'), {
  ssr: false,
});

const AllMenuClient = () => {
  const pathname = usePathname();
  const selector: any = useSelector((state: RootState) => state.menu);
  const [allMenu, setAllMenu] = useState<any>(null);

  useEffect(() => {
    if (selector.users?.name) {
      const path = pathname.split('/');
      const categoryRes = selector.users.name.find(
        (item: any) => encodeURIComponent(item.tagName) === path[path.length - 1]
      );
      setAllMenu(categoryRes);
    }
  }, [selector, pathname]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.agFormatContainer}>
          <div className={styles.agCoursesBox}>
            {allMenu?.items && allMenu.items.length > 0 ? (
              allMenu.items.map((menuitem: any, index: number) => {
                const { path, name, date } = menuitem;
                return <AllMenuCard key={index} path={path} title={name} date={date} />;
              })
            ) : (
              <ComingSoon color="white" />
            )}
          </div>
        </div>
      </div>
      <RegwithLang />
    </>
  );
};

export default AllMenuClient;
