'use client';
import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import Cardg from '../cardbg';
import BlogCr from '../blogCrousel';
import MidLayout from '../midBlog';

const BlogMain = () => {
    const items = [
        {
            id: "1",
            url: "blog/Fajitas-De-Carne/",
            title: "Fajitas De Carne",
            sub: "Aromatic basmati rice cooked with meat, vegetables, and spices.",
            description: "Aromatic basmati rice cooked with meat, vegetables, and spices, Biryani is a celebration of flavor and tradition, loved across the globe for its irresistible taste and aroma.",
            imageUrl: "/image/blog/fajitas.jpg"
        }
        ,
        {
            id: '2',
            url: 'blog/Gambas-Al-Ajillo/',
            title: 'Gambas Al Ajillo',
            sub: 'Spanish tapa with garlic-infused shrimp, ready in just 15 minutes.',
            description: 'Gambas al Ajillo is a beloved Spanish garlic shrimp dish, known for its bold flavors and simplicity. Perfect as an appetizer or main dish, it brings the essence of Spain to your table with every bite.',
            imageUrl: '/image/blog/Shrimp.jpg'
        },

        {
            id: '3', url: 'blog/Paella-De-Marisco/',
            title: 'Paella De Marisco',
            sub: 'A traditional Spanish seafood paella rich in Mediterranean flavors.', description: `Paella de Marisco, a classic Spanish dish from the Valencia region, is a vibrant celebration of seafood and saffron-infused rice. The dish combines fresh shrimp, mussels, clams, and squid with fragrant spices for an authentic taste of Spain. This recipe will guide you through creating a perfect Paella de Marisco, capturing the essence of Mediterranean cuisine.`,
            imageUrl: '/image/blog/Paella.jpg'
        }
        ,
        {
            id: "4",
            url: "blog/Spanish-Churros/",
            title: "Spanish Churros",
            sub: "Golden and crispy, with cinnamon sugar and chocolate sauce.",
            description: "Churros are a beloved Spanish treat, known for their golden crispiness, light choux pastry, and sweet cinnamon-sugar coating. This guide will help you create authentic Spanish churros at home, with step-by-step instructions to ensure the perfect result.",
            imageUrl: "/image/blog/Churros.jpg"
        },

    ];

    return (
        <div className="max-w-[1320px] mx-auto">
            {/* First Section */}
            <motion.div
                className="text-left"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-6xl m-2 my-10 mt-20 font-bold">Blogs</h1>
                <BlogCr slidesData={items} />
            </motion.div>

            {/* Mid Layout Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                <MidLayout items={items} />
            </motion.div>

            {/* Cards Section */}
            <motion.div
                className="text-left"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
            >
                <h2 className="text-3xl font-bold m-2">All Recipes</h2>
                <motion.div
                    className="grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                >
                    {items.map((card, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Cardg data={card} key={index} />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default BlogMain;
