import type { Photo } from "react-photo-album";

const breakpoints = [2000, 1080, 640, 384, 256, 128, 96, 64, 48];

const photos: Photo[] = [
  ...Array.from({ length: 22 }, (_, index) => {
    const dimensions = [
      [1500, 1000], [1600, 1200], [1800, 1300], [1400, 900], [1700, 1100],
      [1900, 1400], [2000, 1500], [2100, 1600], [2200, 1700], [2300, 1800],
      [2400, 1900], [2500, 2000], [2600, 2100], [2700, 2200], [2800, 2300],
      [2900, 2400], [3000, 2500], [3100, 2600], [3200, 2700], [3300, 2800],
      [3400, 2900], [3500, 3000]
    ];
    const [width, height] = dimensions[index];
    return {
      src: `/image/gallery/${index}.jpg`,
      width,
      height,
      srcSet: breakpoints.map((bp) => ({
        src: `/image/gallery/${index}.jpg?w=${bp}`,
        width: bp,
        height: Math.round((height / width) * bp),
      })),
      alt: `Image ${index}`,
    };
  })
];

export { photos };
