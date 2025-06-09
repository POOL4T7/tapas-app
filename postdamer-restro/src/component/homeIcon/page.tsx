import Link from 'next/link';
import React from 'react';
import { FaHome } from "react-icons/fa";

const HomeIcon = () => {
  return (
    <div className="rounded-full p-2 inline-block cursor-pointer">
      <Link href={'/'}>
      <div className="bg-black bg-opacity-30 backdrop-blur-lg rounded-full p-2 hover:bg-opacity-80">
        <FaHome size={30} color="white" />
      </div>
      </Link>
    </div>
  );
}

export default HomeIcon;
