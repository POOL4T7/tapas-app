"use client";
import React from "react";
import { motion } from "framer-motion";
import Cardg from "../cardbg";
import CardC from "../cardCbg";
import CardFull from "../cardFull";

const MidLayout = ({items}:any) => {
    
  
    const popularD =    
    {
        id: '3', url: 'blog/Paella-De-Marisco/',
        title: 'Paella De Marisco',
        sub: 'A traditional Spanish seafood paella rich in Mediterranean flavors.', description: `Paella de Marisco, a classic Spanish dish from the Valencia region, is a vibrant celebration of seafood and saffron-infused rice. The dish combines fresh shrimp, mussels, clams, and squid with fragrant spices for an authentic taste of Spain. This recipe will guide you through creating a perfect Paella de Marisco, capturing the essence of Mediterranean cuisine.`,
        imageUrl: '/image/blog/Paella.jpg'
    }

    return (
        <div className="grid my-2 mt-4 gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <motion.div
                className="flex flex-col m-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h4>Popular</h4>
                <Cardg data={popularD} />
            </motion.div>

            <motion.div
                className="flex flex-col m-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <h4>Recomended</h4>
                <div className="m-2">
                    <div className="flex flex-col gap-2">
                        {items.map((item:any, index:any) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                                <CardC data={item}/>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>

            <motion.div
                className="flex flex-col m-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <h4>About us</h4>
                <CardFull />
            </motion.div>
        </div>
    );
};

export default MidLayout;
