'use client'
import React, { useEffect, useState } from "react";
import styles from './styles.module.css'

// const content = {
//   title: "Welcome to Mundo Tapas",
//   paragraphs: [
//     "At Mundo Tapas, we believe that food is best enjoyed together. In our country, sharing tapas, chatting, and having fun over a plate of bravas and olives—especially with a cold beer—is a way of life.",
//     "That’s exactly why we created Mundo Tapas bar & restaurant: to bring people together in a warm and inviting space where every meal becomes a moment to remember.",
//     "For over 10 years, we have been serving authentic tapas cuisine with our own special touch. Our menu has evolved to include over 50 tapas, catering to all tastes and occasions. But one thing has never changed—our commitment to quality and freshness.",
//     "Every day, our chefs carefully select the finest ingredients and prepare each dish right in front of you, ensuring a truly fresh and flavorful experience.",
//     "Looking for the best tapas in Berlin? Visit us at: Mundo Tapas Alt-Mariendorf, Mundo - Checkpoint Charlie, or Mundo - Potsdamer Platz.",
//     "Whether you're a local or just visiting, our Spanish restaurants offer the perfect place to relax, share a meal, and enjoy the vibrant flavors of Spain.",
//   ],
//   highlight: "If you try us once, you might just get hooked—so consider yourself warned!",
//   closing: "Come and enjoy tapas at our place. We’d love to welcome and serve you!",
// };

export default function MundoIntro({content}:any) {
    const [isMobile, setIsMobile] = useState(false);
      
    //   const langData = props.langData.AddressList;
      const isimg={
        mob:'/image/bgM.jpg',
        lap:'/image/bgM.jpg'
      }
       useEffect(() => {
          const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
          };
      
          window.addEventListener('resize', handleResize);
          handleResize();
      
          return () => {
            window.removeEventListener('resize', handleResize);
          };
        }, []);
  return (
    <section style={{ backgroundImage: isMobile?`url(${isimg.mob})`:`url(${isimg.lap})`}} className={`${styles.main_container} py-12 px-4 md:px-12`}>
      <div className="max-w-5xl bg-[rgba(0,0,0,0.7)] p-4 py-8 rounded-lg mx-auto text-center space-y-6">
        <h2 className="text-2xl font-bold text-[#fcca0c]">{content.title}</h2>
        
        {content.paragraphs.map((para:any, idx:any) => (
          <p key={idx} className="text-lg text-justify text-[white]">
            {para}
          </p>
        ))}
        <p className="text-lg text-left text-[white]">{content.highlight}&nbsp; {content.closing}</p>
      </div>
    </section>
  );
}
