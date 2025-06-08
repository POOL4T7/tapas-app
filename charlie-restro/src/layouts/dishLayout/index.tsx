import React from "react";
import styles from './styles.module.css';
import DetailsAlbum from "@/component/detailsAlbum";

type DishDetailProps = {
  dishId: string;
  title: string;
  metadata: string;
  ingredients: string;
  price: number;
  description:string;
  images:string[]
};

const staticImage=["https://backend1.drypicks.com/media/product_images/Screenshot_2024-06-17_135556.png"]
const DishLayouts: React.FC<DishDetailProps> = ({ dishId, title, metadata,images,description, price,ingredients }) => {

  const filteredImages = images.filter(image => image !== null);

  return (
    <div className={styles.bodyModel}>
      <div className={styles.bodyLeft}>
        <div className="rounded-full w-full h-full object-cover mb-4">
          <DetailsAlbum images={images.filter(image => image !== null).length>0?images.filter(image => image !== null):staticImage} />
        </div>
      </div>
      <div className={styles.bodyRight}>
        <p className={styles.modalTitle}>{title}</p>
        <p className={styles.modalDesc}>{description}</p>
        <p className={styles.modalMeta}>{ingredients}</p>
        <p className={styles.modalIF}>{metadata}</p>
        <p className={styles.modalPrice}>
          &#36;{price}
        </p>
      </div>
    </div>
  );
};

export default DishLayouts;
