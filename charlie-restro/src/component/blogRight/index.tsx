"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import CardC from "../cardCbg";

const RestaurantBlogR = () => {
    // Data for the profile card
    const profile = {
        name: "About Me",
        description: "A blog dedicated to exploring the best culinary delights.",
        image: "/image/blog/logob.png", // Replace with your image URL
    };
    const items = [
        {
            id: "1",
            url: "/blog/Fajitas-De-Carne/",
            title: "Fajitas De Carne",
            sub: "Aromatic basmati rice cooked with meat, vegetables, and spices.",
            description: "Aromatic basmati rice cooked with meat, vegetables, and spices, Biryani is a celebration of flavor and tradition, loved across the globe for its irresistible taste and aroma.",
            imageUrl: "/image/blog/fajitas.jpg"
        }
        ,
        {
            id: '2',
            url: '/blog/Gambas-Al-Ajillo/',
            title: 'Gambas Al Ajillo',
            sub: 'A classic Spanish tapa with garlic-infused shrimp, ready in just 15 minutes.',
            description: 'Gambas al Ajillo is a beloved Spanish garlic shrimp dish, known for its bold flavors and simplicity. Perfect as an appetizer or main dish, it brings the essence of Spain to your table with every bite.',
            imageUrl: '/image/blog/Shrimp.jpg'
        },

        {
            id: '3', url: '/blog/Paella-De-Marisco/',
            title: 'Paella De Marisco',
            sub: 'A traditional Spanish seafood paella rich in Mediterranean flavors.', description: `Paella de Marisco, a classic Spanish dish from the Valencia region, is a vibrant celebration of seafood and saffron-infused rice. The dish combines fresh shrimp, mussels, clams, and squid with fragrant spices for an authentic taste of Spain. This recipe will guide you through creating a perfect Paella de Marisco, capturing the essence of Mediterranean cuisine.`,
            imageUrl: '/image/blog/Paella.jpg'
        }
        ,
        {
            id: "4",
            url: "/blog/Spanish-Churros/",
            title: "Spanish Churros",
            sub: "Golden and crispy, with cinnamon sugar and chocolate sauce.",
            description: "Churros are a beloved Spanish treat, known for their golden crispiness, light choux pastry, and sweet cinnamon-sugar coating. This guide will help you create authentic Spanish churros at home, with step-by-step instructions to ensure the perfect result.",
            imageUrl: "/image/blog/Churros.jpg"
        },

    ];

    // State for feedback form
    const [feedback, setFeedback] = useState({
        email: "",
        description: "",
    });

    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setFeedback((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();
        // Handle form submission, e.g., send the data to the server
        console.log("Feedback submitted:", feedback);
    };

    return (
        <div className="min-h-screen flex flex-col items-center py-10">
            {/* Profile Card */}
            <motion.div
                className="relative bg-white border border-gray-300 rounded-lg shadow-lg p-6 w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white px-4 text-md font-bold text-gray-700">
                    {profile.name}
                </h2>
                <div className="text-center mt-4">
                    <img
                        className="w-24 h-24 rounded-full mx-auto border-4 border-gray-300"
                        src={profile.image}
                        alt={profile.name}
                    />
                    <p className="text-gray-600 mt-2">{profile.description}</p>
                </div>
            </motion.div>

            {/* Recommended Dishes Section */}
            <motion.div
                className="relative bg-white border border-gray-300 rounded-lg shadow-lg p-6 mt-8 w-full max-w-lg sm:max-w-xl md:max-w-2xl mx-auto"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white px-4 text-md font-bold text-gray-700">
                    Recommended Dishes
                </h2>
                <div className="grid grid-cols-1 gap-4 mt-6">
                    {items.map((dish) => (
                        <motion.div
                            key={dish.id}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <CardC data={dish}/>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Feedback Form Section */}
            <motion.div
                className="relative bg-white border border-gray-300 rounded-lg shadow-lg p-6 mt-8 w-full max-w-lg sm:max-w-xl mx-auto"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white px-4 text-md font-bold text-gray-700">
                    Feedback
                </h2>
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-left text-gray-600 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={feedback.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="border border-gray-300 rounded-lg p-3"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="description" className="text-left text-gray-600 mb-1">
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            value={feedback.description}
                            onChange={handleChange}
                            placeholder="Write your feedback here"
                            className="border border-gray-300 rounded-lg p-3"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
                    >
                        Submit Feedback
                    </button>
                </form>
            </motion.div>
        </div>
    );
};

export default RestaurantBlogR;
