'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { PrevButton, NextButton } from './CrouselButton';
import styles from './embla.module.css';

import media1 from './media/pexels-chanwalrus-958547.jpg';
import media2 from './media/pexels-christian-dala-651910440-20527110.jpg';
import media3 from './media/pexels-elevate-1267262.jpg';
import media4 from './media/pexels-frans-van-heerden-201846-670705.jpg';
import media5 from './media/pexels-igor-ovsyannykov-56123-205961.jpg';
import Image from 'next/image';

const media = [media1, media2, media3, media4, media5];

const EmblaCarousel = ({ slides, options = { loop: false } }) => {
  const autoplay = useRef(
    Autoplay(
      { delay: 3000, stopOnInteraction: false },
      (emblaRoot) => emblaRoot.parentElement
    )
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplay.current]);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    autoplay.current.reset();
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    autoplay.current.reset();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((index) => (
            <div className={styles.embla__slide} key={index}>
              <div className={styles.embla__slide__inner}>
                <Image
                  className={styles.embla__slide__img}
                  src={media[index % media.length].src}
                  alt={`Image ${index}`}
                  width={100}
                  height={100}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} /> */}
    </div>
  );
};

export default EmblaCarousel;
