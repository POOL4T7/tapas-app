import React, { useState, useEffect, useRef } from 'react';
import MenuSection from './dishCardList';
import './dishCard.css'; // Import the CSS file here
import { LoadingSkeleton } from '@/layouts/Loader';
import BackIcon from '../BackIcon/page';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { IoClose } from "react-icons/io5";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";



interface Props {
  dish: string | null | undefined;
  details: { name: string; desc: string; };
}

const MenuCardAll: React.FC<Props> = (props) => {
  const category: any = props.dish;
  const details: any = props.details;

  const initialSection = category?.items?.[0]?.title || '';
  const [selectedSection, setSelectedSection] = useState<string>(initialSection);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setSelectedSection(initialSection);
  }, [initialSection]);

  const [isMobile, setIsMobile] = useState(false);

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

  const handleSectionClick = (title: string, index: number) => {
    setSelectedSection(title);
    setIsDrawerOpen(false); // Close drawer after selecting an item

    // Scroll to the corresponding section
    if (sectionRefs.current[index]) {
      sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!category || !category.items || category.items.length === 0) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="content">
      {/* <div style={{ backgroundColor: '#000720', marginLeft: '20px', marginTop: '40px', color: 'white', display: 'flex', alignItems: 'center' }}>
        <BackIcon /><span style={{ fontSize: '1.6rem' }}>&nbsp;Menu</span>
      </div> */}

      <div className="container">
        <div className='w-full flex items-center justify-center  md:text-6xl text-center my-12'>
          <div className='page-section max-w-4xl'>
            <h1>{details.name || 'Menu'}</h1>
            <p className='mt-6 md:text-xl'>{details.desc || ''}</p>
          </div>
        </div>

        <div
          onClick={() => setIsDrawerOpen(true)}
          style={{
            position: 'fixed',
            paddingRight: '15px',
            borderRadius: '10px',
            borderEndEndRadius: '0px',
            borderStartEndRadius: '0px',
            cursor: 'pointer',
            right: '0px',
            top: '50%',
            transform: 'translateY(-50%)',

            backgroundColor: 'gold',
            color: 'black'
          }}

          className="flex space-y-4">
          <div className='flex text-center justify-center items-center p-2'>
            <MdOutlineKeyboardDoubleArrowLeft color='black' />
          </div>
          <div className='flex flex-col items-center !m-0 !py-1'>
            <div className="text-center">K</div>
            <div className="text-center">A</div>
            <div className="text-center">T</div>
            <div className="text-center">E</div>
            <div className="text-center">G</div>
            <div className="text-center">O</div>
            <div className="text-center">R</div>
            <div className="text-center">I</div>
            <div className="text-center">E</div>
          </div>

        </div>

        {/* Drawer */}
        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          PaperProps={{
            sx: {
              width: isMobile ? '90%' : '35%',
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              backdropFilter: 'blur(40px) brightness(115%)'
            },
          }}
        >
          <div style={{ padding: '20px' }}>
            <div style={{ position: 'absolute', right: '5px' }}>
              <IoClose color='white' size={30} />
            </div>

            <h3 style={{ textTransform: 'capitalize' }} className="text-xl font-normal text-[gold] py-2">{category.tagName || 'Category'}</h3>
            {category.items
              .filter((section: any) => section.title !== 'ALL') // Filter out 'ALL' category
              .map((section: any, index: number) => {
                // if (index === 0) return null; // Skip the first item
                return (
                  <h6
                    key={index}
                    className={`text-lg  ${selectedSection === section.title ? 'text-[gold]' : 'text-white'} hover:text-[gold] transition-colors duration-200`}
                    onClick={() => handleSectionClick(section.title, index - 1)} // Adjust index for skipping the first item
                    style={{
                      cursor: 'pointer', margin: '10px 0', borderBottom: '1px solid rgba(255, 255, 255, 0.5)', fontWeight: '300', paddingBottom: '0.5rem'
                    }}
                  >
                    {section.title}
                  </h6>
                );
              })}

          </div>

        </Drawer>

        {/* Content */}
        <div className="w-full px-4 mb-8">
          {category.items.map((section: any, index: number) => {
            if (index === 0) return null; // Skip the first item
            return (
              <div
                key={index}
                className="menu-section"
                ref={(el: any) => (sectionRefs.current[index - 2] = el)} // Adjust index for skipping the first item
              >
                <h2 className="section-title text-2xl text-center p-2 bg-[white] text-black my-5">
                  {section.title}
                </h2>
                {section.dishes.length === 0 ? (
                  <p className="text-center text-gray-500">
                    Exciting new dishes are on their way! Check back soon to see what’s coming.
                  </p>
                ) : (
                  <MenuSection dishes={section.dishes} />
                )}
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
};

export default MenuCardAll;
