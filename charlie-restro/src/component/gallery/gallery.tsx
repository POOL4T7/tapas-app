'use client'
import { useState } from "react";

import  MasonryPhotoAlbum  from "react-photo-album";
// import "react-photo-album/masonry.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";


const GalleryComponent=({photos}:any)=> {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <MasonryPhotoAlbum photos={photos} onClick={({ index }: any) => setIndex(index)} layout={"columns"} />

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </>
  );
}

export default GalleryComponent;