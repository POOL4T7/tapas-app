import Image from 'next/image';
import React from 'react';

type Dish = {
  id: number;
  name: string;
  description: string;
  image: string; 
};

type DishCardProps = {
  dish: Dish;
};

const DishCardGroup: React.FC<DishCardProps> = ({ dish }) => {
  return (
    <div className="bg-white shadow rounded-lg">
      <div style={{    height: '145px'}} className="overflow-hidden rounded-t-lg">
        <Image
          loading='lazy'
          height={100} // Fixed height example
          width={100}
          src={dish.image}
          alt={dish.name}
          layout="fixed"
          className="w-full" 
        />
      </div>
      <div className="p-4">
        <h4 className="text-lg font-semibold">{dish.name}</h4>
        <p className="text-sm text-gray-600">{dish.description}</p>
      </div>
    </div>
  );
};

export default DishCardGroup;
