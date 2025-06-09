import React, { useState, useEffect, useRef } from 'react';
import MenuSection from './dishCardList';
import './dishCard.css'; // Import the CSS file here
import { LoadingSkeleton } from '@/layouts/Loader';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

import Drawer from '@mui/material/Drawer';
import { IoClose } from 'react-icons/io5';
import { MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md';
import { getDrawerStructure, getItemsByMenuId } from '@/service/apiService';
import Image from 'next/image';
import { generateSlug } from '@/lib/utils';

interface Props {
  dish: any;
  details: { name: string; desc: string; id: string };
}

const MenuCardAll: React.FC<Props> = (props) => {
  const category: any = props.dish;
  const details: any = props.details;

  const initialSection = category?.items?.[0]?.title || '';
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [expandedSections, setExpandedSections] = useState<{
    [key: string]: boolean;
  }>({});
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerStructure, setDrawerStructure] = useState<any>([]);
  const [items, setItems] = useState<any>([]);
  const [sectionNameToIndexMap, setSectionNameToIndexMap] = useState<{
    [key: string]: number;
  }>({});
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    if (details.id) {
      getItemsByMenuId(details.id)
        .then((res) => {
          const temp: any = [];
          const stru = res.data?.map((cat: any) => {
            const sub = cat.subCategories.map((subcat: any) => {
              return {
                id: subcat.id,
                name: subcat.name,
                items: subcat.items,
              };
            });
            temp.push({
              id: cat.id,
              name: cat.name,
              image: cat.imagePath,
              description: cat.description,
              subCategories: sub,
            });
            return sub;
          });
          // console.log('stru', stru.flat(2));
          setItems(temp);
          setDrawerStructure(temp);
          // Create a mapping from section name to index
          const mapping: { [key: string]: number } = {};
          stru.flat(2).forEach((item: any, index: number) => {
            mapping[generateSlug(item.name)] = index;
          });
          setSectionNameToIndexMap(mapping);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [details.id]);

  useEffect(() => {
    setSelectedSection(initialSection);
  }, [initialSection]);
  console.log('sectionNameToIndexMap', sectionNameToIndexMap);
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
  // Handle click on a section
  const handleSectionClick = (categoryId: string, subCategoryId: string) => {
    const sectionKey = `${categoryId}-${subCategoryId}`;
    setSelectedSection(sectionKey);
    setIsDrawerOpen(false);

    setTimeout(() => {
      const sectionRef = sectionRefs.current[sectionKey];
      if (sectionRef) {
        sectionRef.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }, 100);
  };

  const toggleSectionExpansion = (sectionTitle: string) => {
    setExpandedSections((prev) => {
      // Create a new object where only the clicked section is expanded
      const newState: { [key: string]: boolean } = {};

      // If the section was not previously expanded, expand it
      // If it was already expanded, collapse it
      newState[sectionTitle] = !prev[sectionTitle];

      return newState;
    });
  };

  console.log('drawerStructure', drawerStructure);

  // if (!category || !category.items || category.items.length === 0) {
  //   return <LoadingSkeleton />;
  // }

  return (
    <div className='content'>
      {/* <div style={{backgroundColor:'#000720' , marginLeft: '20px', marginTop: isMobile? '0px':'40px', color: 'white', display: 'flex', alignItems: 'center' }}>
          <BackIcon /><span style={{ fontSize: '1.6rem' }}>&nbsp;Menu</span>
        </div> */}
      <div className='container'>
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
            color: 'black',
          }}
          className='flex space-y-4'
        >
          <div className='flex text-center justify-center items-center p-2'>
            <MdOutlineKeyboardDoubleArrowLeft color='black' />
          </div>
          <div className='flex flex-col items-center !m-0 !py-1'>
            <div className='text-center'>K</div>
            <div className='text-center'>A</div>
            <div className='text-center'>T</div>
            <div className='text-center'>E</div>
            <div className='text-center'>G</div>
            <div className='text-center'>O</div>
            <div className='text-center'>R</div>
            <div className='text-center'>I</div>
            <div className='text-center'>E</div>
          </div>
        </div>

        <Drawer
          anchor='right'
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          PaperProps={{
            sx: {
              width: isMobile ? '90%' : '35%',
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              backdropFilter: 'blur(40px) brightness(115%)',
            },
          }}
        >
          <div style={{ padding: '20px' }}>
            <div style={{ position: 'absolute', right: '5px' }}>
              <IoClose
                color='white'
                size={30}
                onClick={() => setIsDrawerOpen(false)}
                className='cursor-pointer'
              />
            </div>

            <h3
              style={{ textTransform: 'capitalize' }}
              className='text-xl font-normal text-[gold] py-2'
            >
              {details.name}
            </h3>
            {drawerStructure.map((category: any, index: number) => {
              const isExpanded = expandedSections[category.name] || false;
              return (
                <div key={category.id} className='mb-2'>
                  <div
                    className={`flex items-center text-lg ${
                      selectedSection === category.name
                        ? 'text-[gold]'
                        : 'text-white'
                    } hover:text-[gold] transition-colors duration-200`}
                    style={{
                      cursor: 'pointer',
                      margin: '10px 0',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.5)',
                      fontWeight: '300',
                      paddingBottom: '0.5rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <div
                      onClick={() => {
                        toggleSectionExpansion(category.name);
                      }}
                      className='flex-grow'
                    >
                      {category.name}
                    </div>
                    {category.subCategories &&
                      category.subCategories.length > 0 &&
                      (isExpanded ? (
                        <FaChevronDown
                          className='w-5 h-5'
                          onClick={() => toggleSectionExpansion(category.name)}
                        />
                      ) : (
                        <FaChevronRight
                          className='w-5 h-5'
                          onClick={() => toggleSectionExpansion(category.name)}
                        />
                      ))}
                  </div>
                  {isExpanded &&
                    category.subCategories &&
                    category.subCategories.length > 0 && (
                      <div className='pl-4 mt-2'>
                        {category.subCategories.map(
                          (subCategory: any, idx: number) => (
                            <div
                              key={subCategory.id}
                              className={`flex items-center text-lg ${
                                selectedSection ===
                                `${category.id}-${subCategory.id}`
                                  ? 'text-[gold]'
                                  : 'text-white'
                              } hover:text-[gold] transition-colors duration-200`}
                              style={{
                                cursor: 'pointer',
                                margin: '10px 0',
                                borderBottom:
                                  '1px solid rgba(255, 255, 255, 0.3)',
                                fontWeight: '300',
                                paddingBottom: '0.5rem',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                paddingLeft: '1rem',
                              }}
                              onClick={() =>
                                handleSectionClick(category.id, subCategory.id)
                              }
                            >
                              <div className='flex-grow'>
                                {subCategory.name}
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    )}
                </div>
              );
            })}
          </div>
        </Drawer>
        <div className='w-full px-4 mb-8'>
          {items.map((category: any, idx: number) => {
            return (
              <div key={category.id} className='mb-12'>
                {/* Category Header - Centered with image and text inline */}
                <div className='flex flex-col items-center mb-8'>
                  <div className='flex flex-row items-center gap-4'>
                    {/* Circular Image */}
                    <div className='w-16 h-16 rounded-full overflow-hidden border-2 border-gold'>
                      <Image
                        src={
                          process.env.NEXT_PUBLIC_SERVER_URL + category.image ||
                          '/image/logo.png'
                        }
                        alt={category.name}
                        width={100}
                        height={100}
                        className='w-full h-full object-cover'
                      />
                    </div>

                    {/* Text Content */}
                    <div className='flex flex-col'>
                      <h2 className='text-2xl text-[gold] font-medium'>
                        {' '}
                        {/* Reduced to font-medium */}
                        {category.name}
                      </h2>
                      {category.description && (
                        <p className='text-white text-sm  max-w-md mt-1'>
                          {' '}
                          {/* Added smaller text and top margin */}
                          {category.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                {category.subCategories.map((section: any, index: number) => {
                  // if (index === 0) return null; // Skip the first item
                  return (
                    <div
                      key={index}
                      className='menu-section'
                      id={generateSlug(section.name)}
                      ref={(el) => {
                        sectionRefs.current[`${category.id}-${section.id}`] =
                          el;
                      }}
                    >
                      {/* <h2 className='section-title text-2xl text-center p-2 bg-[white] text-black my-5'>
                        {section.name}
                      </h2> */}
                      <h2 className='section-title flex items-center justify-center text-2xl p-1 bg-[white] text-black my-5'>
                        <div className='w-10 h-10 mr-4'>
                          <Image
                            src={
                              process.env.NEXT_PUBLIC_SERVER_URL +
                                section.imagePath || '/image/logo.png'
                            }
                            alt={section.name}
                            width={100}
                            height={100}
                            className='w-full h-full object-cover rounded-full'
                          />{' '}
                        </div>
                        {section.name}
                      </h2>
                      {section.items.length === 0 ? (
                        <p className='text-center text-gray-500'>
                          Exciting new dishes are on their way! Check back soon
                          to see what’s coming.
                        </p>
                      ) : (
                        <MenuSection dishes={section.items} />
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MenuCardAll;
