import styles from "./style.module.css"
import spinner from "../../../public/image/Spinner.gif"
import Image from "next/image"
export const LoadingSkeleton = () => {
  return (
<div className={styles.loader}>
    <Image alt="Loading..." src={spinner} width={200} height={200} quality={100}/>
    <div>Loading...</div>
</div>
    )
}
