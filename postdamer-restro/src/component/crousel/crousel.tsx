// carousel.tsx
'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import img from '../../../public/image/pexels-elevate-1267262.jpg'

const Carousel = ({data,}: {data:{image: string}[]}) => {
  // State and Ref initialization
  const [currentImg, setCurrentImg] = useState(0)
  const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 })
  const carouselRef = useRef(null)

  // useEffect to get the initial carousel size
  useEffect(() => {
    let elem = carouselRef.current as unknown as HTMLDivElement
    let { width, height } = elem.getBoundingClientRect()
    if (carouselRef.current) {
      setCarouselSize({
        width,
        height,
      })
    }
  }, [])

  return (
    <div>
      {/* Carousel container */}
      <div style={{width:'100%',height:'100vh'}} className="relative full full overflow-hidden rounded-md">
        {/* Image container */}
        <div
          ref={carouselRef}
          style={{
            left: -currentImg * carouselSize.width,
          }}
          className="absolute flex h-full w-full transition-all duration-300"
        >
          {/* Map through data to render images */}
          {data.map((v, i) => (
            <div key={i} className="relative h-full w-full shrink-0">
              <Image
              quality={100}
                className="pointer-events-none"
                alt={`carousel-image-${i}`}
                fill
                src={img}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      {/* <div className="mt-3 flex justify-center">
        <button
          disabled={currentImg === 0}
          onClick={() => setCurrentImg((prev) => prev - 1)}
          className={`border px-4 py-2 font-bold ${currentImg === 0 && 'opacity-50'}`}
        >
          {'<'}
        </button>
        <button
          disabled={currentImg === data.length - 1}
          onClick={() => setCurrentImg((prev) => prev + 1)}
          className={`border px-4 py-2 font-bold ${currentImg === data.length - 1 && 'opacity-50'}`}
        >
          {'>'}
        </button>
      </div> */}
    </div>
  )
}

export default Carousel
