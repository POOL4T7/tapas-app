'use client';

import React from 'react';
import GalleryComponent from '../gallery/gallery';
import { motion } from 'framer-motion'

import { photos} from '../gallery/photos';

const GalleryLayout = () => {
  return (
    <div className="max-w-[1320px] mx-auto">
      <div className="h-[40vh] md:rounded-lg fontAA  flex items-center justify-center text-center text-[#FFCA0A] p-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl font-bold">Our Gallery</h1>
          <p className="text-lg mt-4">Our Culinary Creations & Deliciously Captured</p>
        </motion.div>
      </div>
      <div className="min-h-screen mx-4  flex flex-col">
        {/* <header className=" text-[#FFCA0A] p-4 text-center">
          <h1 className="text-4xl font-bold">A Feast for the Eyes</h1>
        </header> */}
        <div className='mx-4  py-4'>
          <GalleryComponent photos={photos} />
        </div>
     
     
    </div>
    </div>

  );
};

export default GalleryLayout;
