import Image from 'next/image';
import React from 'react';

type Dish = {
  id: number;
  name: string;
  description: string;
  image: string;
  updatedPath?: string[];
};

type DishCardProps = {
  dish: Dish;
};

const DishCardGroup: React.FC<DishCardProps> = ({ dish }) => {
  console.log('dish', dish);
  return (
    <>
      {dish?.updatedPath?.map((image) => (
        <div className='bg-white shadow rounded-lg' key={image}>
          <div
            style={{ height: '145px' }}
            className='overflow-hidden rounded-t-lg'
          >
            <Image
              loading='lazy'
              height={100}
              width={100}
              src={process.env.NEXT_PUBLIC_SERVER_URL + dish.image}
              alt={dish.name || 'img'}
              layout='fixed'
              className='w-full'
            />
          </div>
        </div>
      ))}
    </>
  );
};
// const DishCardGroup: React.FC<DishCardProps> = ({ dish }) => {
//   return (
//     <div className='bg-white shadow rounded-lg'>
//       <div style={{ height: '145px' }} className='overflow-hidden rounded-t-lg'>
//         <Image
//           loading='lazy'
//           height={100}
//           width={100}
//           src={process.env.NEXT_PUBLIC_SERVER_URL + dish.image}
//           alt={dish.name || 'img'}
//           layout='fixed'
//           className='w-full'
//         />
//       </div>
//       <div className='p-4'>
//         <h4 className='text-lg font-semibold'>{dish.name}</h4>
//         <p className='text-sm text-gray-600'>{dish.description}</p>
//       </div>
//     </div>
//   );
// };

export default DishCardGroup;
