import Image from 'next/image';
import styles from './style.module.css';

const MenuCrousal = () => {
  return (
    <>
      <section className={styles.carousel}>
        <h2 className={styles['categories__title']}>My List</h2>
        <div className={styles['carousel__container']}>
          <div className={styles['carousel-item']}>
            <Image
              className={styles['carousel-item__img']}
              src='https://images.pexels.com/photos/708392/pexels-photo-708392.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
              alt='people'
              height={100}
              width={100}
            />
            <div className={styles['carousel-item__details']}>
              <div className={styles.controls}>
                <span
                  className={`fas fa-play-circle ${styles.controls}`}
                ></span>
                <span
                  className={`fas fa-plus-circle ${styles.controls}`}
                ></span>
              </div>
              <h5 className={styles['carousel-item__details--title']}>
                Descriptive Title
              </h5>
              <h6 className={styles['carousel-item__details--subtitle']}>
                Date and Duration
              </h6>
            </div>
          </div>
          <div className={styles['carousel-item']}>
            <Image
              className={styles['carousel-item__img']}
              src='https://images.pexels.com/photos/1785001/pexels-photo-1785001.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
              alt='people'
              height={100}
              width={100}
            />
            <div className={styles['carousel-item__details']}>
              <div className={styles.controls}>
                <span
                  className={`fas fa-play-circle ${styles.controls}`}
                ></span>
                <span
                  className={`fas fa-plus-circle ${styles.controls}`}
                ></span>
              </div>
              <h5 className={styles['carousel-item__details--title']}>
                Descriptive Title
              </h5>
              <h6 className={styles['carousel-item__details--subtitle']}>
                Date and Duration
              </h6>
            </div>
          </div>
          <div className={styles['carousel-item']}>
            <Image
              className={styles['carousel-item__img']}
              src='https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
              alt='people'
              height={100}
              width={100}
            />
            <div className={styles['carousel-item__details']}>
              <div className={styles.controls}>
                <span
                  className={`fas fa-play-circle ${styles.controls}`}
                ></span>
                <span
                  className={`fas fa-plus-circle ${styles.controls}`}
                ></span>
              </div>
              <h5 className={styles['carousel-item__details--title']}>
                Descriptive Title
              </h5>
              <h6 className={styles['carousel-item__details--subtitle']}>
                Date and Duration
              </h6>
            </div>
          </div>
          <div className={styles['carousel-item']}>
            <Image
              className={styles['carousel-item__img']}
              src='https://images.pexels.com/photos/1071882/pexels-photo-1071882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
              alt='people'
              height={100}
              width={100}
            />
            <div className={styles['carousel-item__details']}>
              <div className={styles.controls}>
                <span
                  className={`fas fa-play-circle ${styles.controls}`}
                ></span>
                <span
                  className={`fas fa-plus-circle ${styles.controls}`}
                ></span>
              </div>
              <h5 className={styles['carousel-item__details--title']}>
                Descriptive Title
              </h5>
              <h6 className={styles['carousel-item__details--subtitle']}>
                Date and Duration
              </h6>
            </div>
          </div>
          <div className={styles['carousel-item']}>
            <Image
              className={styles['carousel-item__img']}
              src='https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
              alt='people'
              height={100}
              width={100}
            />
            <div className={styles['carousel-item__details']}>
              <div className={styles.controls}>
                <span
                  className={`fas fa-play-circle ${styles.controls}`}
                ></span>
                <span
                  className={`fas fa-plus-circle ${styles.controls}`}
                ></span>
              </div>
              <h5 className={styles['carousel-item__details--title']}>
                Descriptive Title
              </h5>
              <h6 className={styles['carousel-item__details--subtitle']}>
                Date and Duration
              </h6>
            </div>
          </div>
          <div className={styles['carousel-item']}>
            <Image
              className={styles['carousel-item__img']}
              src='https://images.pexels.com/photos/6945/sunset-summer-golden-hour-paul-filitchkin.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
              alt='people'
              height={100}
              width={100}
            />
            <div className={styles['carousel-item__details']}>
              <div className={styles.controls}>
                <span
                  className={`fas fa-play-circle ${styles.controls}`}
                ></span>
                <span
                  className={`fas fa-plus-circle ${styles.controls}`}
                ></span>
              </div>
              <h5 className={styles['carousel-item__details--title']}>
                Descriptive Title
              </h5>
              <h6 className={styles['carousel-item__details--subtitle']}>
                Date and Duration
              </h6>
            </div>
          </div>

          <div className={styles['carousel-item']}>
            <Image
              className={styles['carousel-item__img']}
              src='https://images.pexels.com/photos/1964471/pexels-photo-1964471.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
              alt='people'
              height={100}
              width={100}
            />
            <div className={styles['carousel-item__details']}>
              <div className={styles.controls}>
                <span
                  className={`fas fa-play-circle ${styles.controls}`}
                ></span>
                <span
                  className={`fas fa-plus-circle ${styles.controls}`}
                ></span>
              </div>
              <h5 className={styles['carousel-item__details--title']}>
                Descriptive Title
              </h5>
              <h6 className={styles['carousel-item__details--subtitle']}>
                Date and Duration
              </h6>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MenuCrousal;
