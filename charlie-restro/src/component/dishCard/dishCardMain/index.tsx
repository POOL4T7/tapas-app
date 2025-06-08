import React from 'react';
import styles from './style.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
const DishCard: React.FC<DishDetail> = ({ name, ingredients,product_tag, price, thumbnail, image_urls, metadata, description, product_id }) => {
  const pathname = usePathname()



  return (
    <Link href={`${pathname}/${product_id}`}>
      <div className={`${styles.bg} mb-4 p-4 border border-gray-200 rounded-lg cursor-pointer`}>
        <div className="flex items-center">
          <div className="w-16 h-16">
          <Image
              width={520}
              height={520}
              src={thumbnail ? thumbnail : image_urls.filter(image => image !== null)[0]}
              alt={name ||'img'}
              className="rounded-full w-full h-full object-cover"
            />
          </div>
          <div className="ml-4 flex-1">
            <div className="flex justify-between items-center">
              <h5 className={styles.cardTitle}>
                {name} <sup style={{color:'white',borderRadius:'2px' ,lineHeight:'normal', height:'fit-content',padding:'0px 2px', margin:'0px 2px' ,fontWeight:'200'}}>{product_tag}</sup>
              </h5>
              <p className={styles.cardPrice}>
                	&#8364;{price}
              </p>
            </div>
            {/* <span className={styles.cardMeta}>{ingredients}</span> */}
          </div>
        </div>
      </div>

      {/* Uncomment the following section if you want to use the modal */}
      {/* <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent className={styles.modalContent}>
          <ModalHeader>
            <h2 className={styles.modalTitle}>{name}</h2>
          </ModalHeader>
          <ModalBody>
            <DishLayouts description={description} metadata={metadata} images={image_urls} title={name} ingredients={ingredients} price={price} dishId="breakfast" />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}
    </Link>
  );
};

export default DishCard;
