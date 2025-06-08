'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@nextui-org/react';
import BookingWidget from '../bookingwidge';
import Link from 'next/link';

const OfferPopup = (props:any) => {
    const langData=props.langData
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  const containerAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const offerTextAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };
  const contact={
    whatsApp: 'https://wa.me/+493025294284?text=Hallo%20Tapas%20-%20Mundo%20-%20Checkpoint%20Charlie%20Team',
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true); // Automatically open the popup when the component mounts
    }, 1000); // Adjust the delay if needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
          initial="hidden"
          animate="visible"
          variants={containerAnimation}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <div className="bg-[#7b6105] p-8 rounded-lg relative w-11/12 md:w-1/3 text-center shadow-lg">
            {/* <button
              onClick={handleClose}
              style={{lineHeight:'1rem'}}
              className="absolute top-2 right-2 text-white font=bold text-2xl focus:outline-none"
            >
              &times;
            </button> */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={offerTextAnimation}
              transition={{ duration: 1, ease: 'easeInOut' }}
            >

              <h1 className="text-white text-3xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: langData.heading }} />
              <h2 className="text-white text-2xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: langData.rest }} />
             
              {/* <h1 className="text-white text-xl font-bold mb-4">
                {langData.title}
              </h1>
              <p className="text-white mb-6">
                {langData.description}
              </p> */}
            </motion.div>

            <div className="flex justify-center space-x-4">
                <BookingWidget bottom={false} popup={true} header={false} banner={false}  langData={langData}/>
                <Link target='_blank' href={contact.whatsApp}>
              <Button className="bg-black text-white py-2 px-4 rounded-lg">

              {langData.button2}
              </Button>
              </Link>
              <Button onClick={handleClose} className="bg-black text-white py-2 px-4 rounded-lg">

              {langData.button3}
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default OfferPopup;
