'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import VerticalLinearStepper from "../stepper";

const DishPage = ({blogData}:any) => {

  const [wrongItems, setWrongItems] = useState<number[]>([]);
  const [wrongItems1, setWrongItems1] = useState<number[]>([]);

  const toggleWrongItem = (index: number) => {
    setWrongItems((prev) =>
      prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]
    );
  };
  const toggleWrongItem1 = (index: number) => {
    setWrongItems1((prev) =>
      prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]
    );
  };
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index:any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      className="p-6 space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Heading */}
      <motion.h1
        className="text-3xl font-bold text-left"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {blogData.title}
      </motion.h1>

      {/* Image Section */}
      <motion.div
        className="w-full h-[80%]"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src={blogData.image}
          alt="Dish"
          className="w-full h-full object-cover rounded"
          whileHover={{ scale: 1.05 }}
        />
      </motion.div>

      {/* Description Section */}
      <motion.div
        className="space-y-2"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, staggerChildren: 0.2 }}
      >
        {blogData.description.map((line:any, index:any) => (
          <motion.p key={index} className="text-gray-700 text-left">
            {line}
          </motion.p>
        ))}
      </motion.div>

      {/* Checklist Section */}
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-semibold text-left">Ingredients</h2>
        <ul className="space-y-2">
          {blogData.checklist.map((item:any, index:any) => (
            <motion.li
              key={index}
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.02 }}
            >
              <input
                type="checkbox"
                className="h-5 w-5"
                checked={wrongItems1.includes(index)}
                onChange={() => toggleWrongItem1(index)}
              />
              <span
                className={
                  wrongItems1.includes(index)
                    ? "line-through text-red-500 text-left"
                    : "text-gray-800 text-left"
                }
              >
                {item}
              </span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl text-left font-semibold">For Dressing</h2>
        <ul className="space-y-2">
          {blogData.checklist.map((item:any, index:any) => (
            <motion.li
              key={index}
              className="flex items-center text-left space-x-3"
              whileHover={{ scale: 1.02 }}
            >
              <input
                type="checkbox"
                className="h-5 w-5"
                checked={wrongItems.includes(index)}
                onChange={() => toggleWrongItem(index)}
              />
              <span
                className={
                  wrongItems.includes(index)
                    ? "line-through text-left text-red-500"
                    : "text-gray-800 text-left"
                }
              >
                {item}
              </span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Additional Details Section */}
      <motion.div
        className="space-y-2"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
      <h2 className="text-2xl font-semibold text-left">Direction</h2>

      <VerticalLinearStepper steps={blogData.steps}/>
      </motion.div>

      <motion.div
        className="space-y-2"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl text-left font-semibold">{blogData.additionalDetails.header}</h2>
        <p className="text-gray-700 text-left">{blogData.additionalDetails.text}</p>
      </motion.div>

      {/* Notes Section */}
      <motion.div
        className="bg-gray-100 rounded"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-xl font-semibold text-left">{blogData.notes.header}</h2>
        <p className="text-gray-700 text-left">{blogData.notes.text}</p>
      </motion.div>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {blogData.faq.map((faq:any, index:any) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <button
              className="w-full text-left p-4 bg-gray-100 hover:bg-gray-200 flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium text-gray-900">{faq.question}</span>
              <span className="text-gray-600">{openIndex === index ? "-" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="p-4 text-gray-700 bg-gray-50">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default DishPage;
