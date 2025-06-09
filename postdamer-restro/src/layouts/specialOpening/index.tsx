import styles from './styles.module.css'
import { VisitBtn } from '@/component/visitBtn'
export const SpecialOpening = () => {
    return (
        <div className={`${styles.main} flex flex-row flex-wrap justify-between`}>

            <div className={`${styles.first} w-full sm:w-1/3`}>

                <div className={styles.details}>

                    <span>
                       Hygienic
                    </span>
                    <h3>
                    Hygienic
                    </h3>
                    <VisitBtn linkTag='Check' link='#'/>

                </div>
            </div>
            <div className={`${styles.second} w-full sm:w-1/3`}>
                <div className={styles.details}>

                    <span>
                    SPECIAL REQUESTS
                    </span>
                    <h3>
                    Fully Spanish
                    </h3>
                    <VisitBtn linkTag='Check' link='#'/>

                </div>

            </div>
            <div className={`${styles.third} w-full sm:w-1/3`}>
                <div className={styles.details}>

                    <span>
                    INTOLERANCE
                    </span>
                    <h3>
                    Fresh Ingredients

                    </h3>
                    <VisitBtn linkTag='Check' link='#'/>
                </div>
            </div>
        </div>
    )
}
