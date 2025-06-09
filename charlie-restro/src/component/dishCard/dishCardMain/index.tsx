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
import Image from 'next/image';
import { formatPrice } from '@/lib/utils';

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

const DishCard: React.FC<DishDetail> = ({
  product_tag,
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
        className={`${styles.bg} mb-4 p-4 border border-gray-200 rounded-lg cursor-pointer`}
        onClick={onOpen}
      >
        <div className='flex items-center'>
          <div className='w-16 h-16'>
            <Image
              width={520}
              height={520}
              src={
                process.env.NEXT_PUBLIC_SERVER_URL +
                image_urls?.filter((image) => image !== null)?.[0]
              }
              alt={name || 'img'}
              className='rounded-full w-full h-full object-cover'
            />
          </div>
          <div className='ml-4 flex-1'>
            <div className='flex justify-between items-center'>
              <h5 className={styles.cardTitle}>{name}</h5>
              {/* <p className={styles.cardPrice}>&#8364;{price}</p> */}
              <p className={styles.cardPrice}>{formatPrice(price)}</p>
            </div>
            <span className={styles.cardMeta}>{product_tag}</span>
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
              product_tag={product_tag || ''}
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
