import React, { useState } from 'react';
import styles from './styles.module.css';
import DetailsAlbum from '@/component/detailsAlbum';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from '@nextui-org/react';
import { formatPrice } from '@/lib/utils';

type DishDetailProps = {
  dishId: string;
  title: string;
  metadata: string;
  ingredients: string;
  price: number;
  description: string;
  product_tag: any;
  images: string[];
};

const staticImage = [
  'https://backend1.drypicks.com/media/product_images/Screenshot_2024-06-17_135556.png',
];

// Define allergens and additives data
const allergensData: any = {
  A: 'Contains gluten-containing cereals (wheat, rye, barley, oats, spelt, etc.)',
  C: 'Contains egg or egg products',
  G: 'Contains milk or milk products (lactose)',
  1: 'With colorants',
  14: 'Blackened',
};

// Function to render allergens and additives based on product tag
const renderAllergensAndAdditives = (productTag: string) => {
  const tags = productTag.split(',').map((tag) => tag.trim());

  return (
    <div>
      {tags.map((tag) => (
        <div key={tag} className='mb-2 flex'>
          <h3 style={{ color: '#b8a17e' }} className='font-semibold'>
            {tag}:{' '}
          </h3>
          <p>{allergensData[tag]}</p>
        </div>
      ))}
    </div>
  );
};

const DishLayouts: React.FC<DishDetailProps> = ({
  dishId,
  title,
  metadata,
  images,
  description,
  price,
  ingredients,
  product_tag,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const filteredImages = images
    ?.filter((image) => image !== null)
    .map((item) => process.env.NEXT_PUBLIC_SERVER_URL + item);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={styles.bodyModel}>
      <div className={styles.bodyLeft}>
        <div className='rounded-full w-full h-full object-cover mb-4'>
          <DetailsAlbum
            images={filteredImages?.length > 0 ? filteredImages : staticImage}
          />
        </div>
      </div>
      <div className={styles.bodyRight}>
        <p
          className={`${styles.modalTitle} flex items-center justify-center lg:justify-start`}
        >
          {title}
          {product_tag && (
            <sup
              onClick={handleOpenModal}
              className={`text-sm rounded px-2 cursor-pointer text-black hover:bg-black hover:text-white ${styles.productTag}`}
            >
              {product_tag}
            </sup>
          )}
        </p>
        <p className={styles.modalPrice}>Price:- &nbsp; {formatPrice(price)}</p>
        <p className={styles.modalDesc}>{description}</p>
        <p className={styles.modalMeta}>{ingredients}</p>
        <p className={styles.modalIF}>{metadata}</p>
      </div>

      {/* Modal popup for allergens and additives */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ModalContent className='bg-black text-white'>
          <ModalHeader>
            <h2 className='text-xl font-semibold'>{title}</h2>
          </ModalHeader>
          <ModalBody>{renderAllergensAndAdditives(product_tag)}</ModalBody>
          <ModalFooter>
            {/* <Button onClick={handleCloseModal}>Close</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default DishLayouts;
