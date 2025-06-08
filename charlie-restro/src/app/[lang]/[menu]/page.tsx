'use client';

import { useEffect, useState, lazy, Suspense } from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '@/Redux/store';
import { usePathname } from 'next/navigation';
import Head from 'next/head';
import { LoadingSkeleton } from '@/layouts/Loader';
import dynamic from 'next/dynamic';

// Lazy loading components

// const AllMenuCard = dynamic(() => import('@/layouts/allmenu'), {
//   loading: () => <LoadingSkeleton />,
// });

// const ComingSoon = dynamic(() => import('@/component/commingSoon'), {
//   ssr: false,
// });

const RegwithLang = dynamic(() => import('@/component/RegwithLang'), {
  ssr: false,
});

const ClientMenuCards = dynamic(() => import('@/component/menuMain/page'), {
  ssr: false,
  // loading: () => <LoadingSkeleton />,
});

const AllMenu = () => {
  const pathname = usePathname();
  const selector: any = useSelector((state: RootState) => state.menu);
  const [allMenu, setAllMenu]: any = useState(null);

  useEffect(() => {
    if (selector?.users?.name) {
      const path = pathname.split('/');
      // const categoryRes = selector.users.name.find(
      //   (item: any) =>
      //     encodeURIComponent(item.tagName) === path[path.length - 1]
      // );
      setAllMenu([]);
    }
  }, [selector, pathname]);

  return (
    <>
      {/* SEO Optimization */}
      {/* <Head>
        <title>Explore Our Menu | Tapas Mundo</title>
        <meta
          name='description'
          content='Discover a variety of Spanish and Latin American dishes at Tapas Mundo. Explore our menu for an unforgettable dining experience.'
        />
        <link
          rel='canonical'
          href='https://alt-mariendorf.tapas-mundo.com/en/menükarte-menu-card/speisekarte-a-la-carte'
        />
      </Head> */}
      <ClientMenuCards />

      <Suspense fallback={<p>Loading...</p>}>
        <RegwithLang />
      </Suspense>
    </>
  );
};

export default AllMenu;
