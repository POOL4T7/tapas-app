'use client';

import { getMenuItem } from '@/service/apiService';
import React, { useEffect, useState } from 'react';
import DetailsAlbum from '@/component/detailsAlbum';
import { LoadingSkeleton } from '@/layouts/Loader';
import styles from './style.module.css';
import BackIcon from '@/component/BackIcon/page';
import dynamic from 'next/dynamic';

const RegwithLang = dynamic(() => import('@/component/RegwithLang'), {
  ssr: false,
});

// Allergens and additives
const allergensData: any = {
  A: 'Contains gluten-containing cereals (wheat, rye, barley, oats, spelt, etc.)',
  C: 'Contains egg or egg products',
  G: 'Contains milk or milk products (lactose)',
  1: 'With colorants',
  14: 'Blackened',
};

const renderAllergensAndAdditives = (productTag: string) => {
  const tags = productTag.split(',').map((tag) => tag.trim());
  return (
    <div>
      {tags.map((tag) => (
        <div key={tag} className="mb-2 flex">
          <h3 style={{ color: '#b8a17e' }} className="font-semibold">{tag}:&nbsp;</h3>
          <p>{allergensData[tag]}</p>
        </div>
      ))}
    </div>
  );
};

const MenuDishClient = ({ menuDish }: { menuDish: string }) => {
  const [dish, setDish] = useState<any>(null);
  const [showAllergens, setShowAllergens] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const result = await getMenuItem(menuDish);
        setDish(result.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDishes();
  }, [menuDish]);

  if (!dish) return <LoadingSkeleton />;

  return (
    <>
      <div className="w-full">
        <div
          className={styles.background}
          style={{ backgroundImage: `url(${dish.thumbnail})` }}
        >
          <div className={styles.bgBack}>
            <div className="bg-dark pt-20 pb-20"></div>
          </div>
        </div>

        <div className="w-full flex justify-center p-8">
          <div className="max-w-6xl w-full p-4">
            <BackIcon />

            <div className="max-w-screen-xl mx-auto flex flex-wrap lg:flex-nowrap">
              <div className={`flex items-center justify-center ${isMobile ? 'w-[100%]' : 'w-[50%]'} lg:w-1/2 p-2`}>
                <div className="relative w-full h-full">
                  <DetailsAlbum images={dish.image_urls.filter((image: any) => image !== null)} />
                </div>
              </div>

              <div className={`${isMobile ? 'w-[100%]' : 'w-[50%]'} lg:w-1/2 p-2`}>
                <div className="bg-gray-100 flex h-full">
                  <div className="w-full px-6 bg-white rounded-lg relative">
                    <h2 style={{ color: '#b8a17e', fontSize: '2rem' }} className="text-3xl font-bold mb-4">
                      {dish.name}
                    </h2>
                    <p className="text-lg mb-4">{dish.description}</p>

                    <button
                      onClick={() => setShowAllergens(!showAllergens)}
                      className="text-sm rounded px-2 py-1 mb-4 bg-black text-white hover:bg-white hover:text-black border border-black transition duration-300 ease-in-out"
                    >
                      {showAllergens ? 'Allergens And Additives' : `Know More ${dish.product_tag}`}
                    </button>

                    {showAllergens && (
                      <div className="mb-4 transition-all duration-300 ease-in-out">
                        {renderAllergensAndAdditives(dish.product_tag)}
                      </div>
                    )}

                    <p className="text-md mb-2">
                      <span style={{ color: '#b8a17e' }}>Ingredients:</span> {dish.ingredients}
                    </p>
                    <p className="text-md mb-2">
                      <span style={{ color: '#b8a17e' }}>Price:</span> &#8364;{dish.price}
                    </p>
                    {dish.sale_price && (
                      <p className="text-md mb-2">
                        <span style={{ color: '#b8a17e' }}>Sale Price:</span> &#8364;{dish.sale_price}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4"></div>
          </div>
        </div>
      </div>

      <RegwithLang />
    </>
  );
};

export default MenuDishClient;
