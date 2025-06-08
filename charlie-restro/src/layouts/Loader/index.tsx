import styles from "./style.module.css";
import Image from "next/image";

export const LoadingSkeleton = () => {
  return (
    <div className={styles.loader}>
      <Image 
        alt="Loading..." 
        src="/image/Spinner.gif" 
        width={200} 
        height={200} 
        quality={100} 
        unoptimized 
      />
      <div>Loading...</div>
    </div>
  );
};
