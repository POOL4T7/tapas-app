import Link from 'next/link';
import React from 'react';
import { IoMdArrowRoundBack } from "react-icons/io";

const BackIcon = () => {
  return (
    <div className="rounded-full p-2 inline-block cursor-pointer">
      <Link href={'/menu'}>
      <div className="bg-black bg-opacity-30 backdrop-blur-lg rounded-full p-2 hover:bg-opacity-80">
        <IoMdArrowRoundBack size={30} color="white" />
      </div>
      </Link>
    </div>
  );
}

export default BackIcon;
