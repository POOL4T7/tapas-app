'use client';

import { motion } from "framer-motion";
import RestaurantBlogR from "../blogRight";
import DishPage from "../dishPage";

const GridLayout = ({blogData}) => {
  return (
    <motion.div
      className="max-w-[1320px] py-20 mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col md:flex-row gap-4">
        {/* Left Section */}
        <motion.div
          className="md:flex-[2]"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <DishPage blogData={blogData}/>

        </motion.div>

        {/* Right Section */}
        <motion.div
          className="md:flex-[1]"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <RestaurantBlogR />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default GridLayout;
