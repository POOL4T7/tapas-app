import React from 'react';
import DishCard from '../dishCardMain';

export interface MenuSectionProps {
  dishes: any[];
  onClick?: () => void;
  isSelected?: boolean;
}

const MenuSection: React.FC<MenuSectionProps> = ({ dishes }) => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2  gap-4 with-transition'>
      {dishes.map((dish, index) => (
        <DishCard
          key={index}
          {...dish}
          image_urls={dish.itemsImagePaths}
          product_tag={dish.tagLine}
          ingredients={dish.ingredients?.join(', ') || ''}
        />
      ))}
    </div>
  );
};

export default MenuSection;
