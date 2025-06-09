import React from 'react';
import { GrLanguage } from "react-icons/gr";

const LanguageIcon = () => {
  return (
    <div className="rounded-full p-2 inline-block cursor-pointer">
      <div className="bg-black bg-opacity-30 backdrop-blur-lg rounded-full p-2 hover:bg-opacity-80">
        <GrLanguage size={30} color="white" />
      </div>
    </div>
  );
}

export default LanguageIcon;
