import React from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from '@nextui-org/react';
import styles from './style.module.css';
import DishLayouts from '@/layouts/dishLayout';
import Link from 'next/link';
import { metadata } from '@/app/layout';
import Image from 'next/image';

export interface DishDetail {
  created_at: string;
  description: string;
  image1: string;
  image2: string;
  image3: string;
  image_urls: string[];
  ingredients: string;
  is_available: boolean;
  metadata: string;
  name: string;
  offer: number;
  price: any;
  product_id: number;
  product_tag: string;
  sale_price: string;
  status: string;
  subcategory: number;
  subsubcategory: number;
  tagName: string | null;
  thumbnail: string;
  updated_at: string;
}
const staticImage =
  'https://backend1.drypicks.com/media/product_images/Screenshot_2024-06-17_135556.png';

const DishCard: React.FC<DishDetail> = ({
  name,
  ingredients,
  price,
  thumbnail,
  image_urls,
  metadata,
  description,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Link href={`#${name}`}>
      <div
        className='mb-4 p-4 border border-gray-200 rounded-lg cursor-pointer'
        onClick={onOpen}
      >
        <div className='flex items-center'>
          <div className='w-16 h-16'>
            <Image
              src={
                thumbnail != null
                  ? thumbnail
                  : image_urls.filter((image) => image !== null)[0]
              }
              alt={name}
              className='rounded-full w-full h-full object-cover'
              height={100}
              width={100}
            />
          </div>
          <div className='ml-4 flex-1'>
            <div className='flex justify-between items-center'>
              <h5 className={styles.cardTitle}>{name}</h5>
              <p className={styles.cardPrice}>&#8364;{price}</p>
            </div>
            <span className={styles.cardMeta}>{ingredients}</span>
          </div>
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent className={styles.modalContent}>
          <ModalHeader>
            {/* <h2 className={styles.modalTitle}>{title}</h2> */}
          </ModalHeader>
          <ModalBody>
            <DishLayouts
              description={description}
              metadata={metadata}
              images={image_urls}
              title={name}
              ingredients={ingredients}
              price={price}
              dishId='breakfast'
            />
          </ModalBody>
          <ModalFooter>
            {/* <Button onClick={onClose}>Close</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Link>
  );
};

export default DishCard;
