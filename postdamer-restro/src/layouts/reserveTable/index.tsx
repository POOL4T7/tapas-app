import { CalendarForm } from '@/component/calender'
import styles from './style.module.css'
export const ReserveTable = () => {
    return (
        <div className={styles.background}>
            <div className={styles.main_container}>
                <div className={styles.leftHeading}>
                    <div className={styles.leftHeader}>
                        Reserve !
                    </div>
                    <div className={styles.leftDes}>

                        Book Now
                    </div>
                    <div>

                    </div>

                </div>
                <div className={styles.booking}>
                <div className={styles.calender}>

                <CalendarForm/>

                </div>
                <div className={styles.slots}></div>
                <div className={styles.button}></div>




                </div>
                <div className={styles.rightHeading}>

                    <div className={styles.rightHeader}>
                        Discover our New

                    </div>
                    <div className={styles.rightDes}>
                        Menu !
                    </div>
                </div>



            </div>
        </div>
    )
}
