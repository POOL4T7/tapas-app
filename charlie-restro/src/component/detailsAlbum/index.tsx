'use client'

import { useState, useEffect } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import React from "react";
import styles from './styles.module.css';
import Image from "next/image";

export default function DetailsAlbum({ images }: { images: string[] }) {
    const [index, setIndex] = useState(-1);

    return (
        <>
            <div className={styles.albumContainer}>
                <div className={styles.mainImage} onClick={() => setIndex(0)}>
                <Image className={styles.img}   src={images[0]}   alt="Main Dish" height={200}  width={200}/>

                    {/* <img src={images[0]} alt="Main Dish" className={styles.img} /> */}
                </div>
                <div className={styles.sideImages}>
                    {images.slice(1, 3).map((image, i) => (
                        <div key={i} className={styles.sideImage} onClick={() => setIndex(i + 1)}>
                            <Image className={styles.img}   src={image}   alt={`Side Dish ${i + 1}`}  height={200}  width={200}/>
                            {/* <img src={image} alt={`Side Dish ${i + 1}`} className={styles.img} /> */}
                        </div>
                    ))}
                </div>
                <Lightbox
                    slides={images.map(src => ({ src }))}
                    open={index >= 0}
                    index={index}
                    close={() => setIndex(-1)}
                    plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                />
            </div>
        </>
    );
}
