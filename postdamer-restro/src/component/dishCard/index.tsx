import React, { useState, useEffect } from 'react';
import MenuSection from './dishCardList';
import './dishCard.css'; // Import the CSS file here
import menuDataDishes, { dishTag } from '@/AllData/dishCardData';
import { LoadingSkeleton } from '@/layouts/Loader';

interface Props {
  dish: string | null | undefined;
}

const MenuCardAll: React.FC<Props> = (props) => {
  const category: any = props.dish;

  const initialSection = category?.items?.[0]?.title || '';
  const [selectedSection, setSelectedSection] = useState<string>(initialSection);

  useEffect(() => {
    setSelectedSection(initialSection);
  }, [category]);

  // Handle click on a section
  const handleSectionClick = (title: string) => {
    setSelectedSection(title);
  };

  if (!category || !category.items || category.items.length === 0) {
    return <LoadingSkeleton/>
  }

  return (
    <div className="content">
      <div className="container">
        <div className="w-full text-center mb-12">
          <div className="page-section">
            <h1>{category.tagName || 'Menu'}</h1>
            </div>
          </div>
          <div className="section-tabs">
            {category.items.map((section: dishTag, index: number) => (
              <h3
                key={index}
                className={`section-tab ${selectedSection === section.title ? 'selected' : ''}`}
                onClick={() => handleSectionClick(section.title)}
              >
                {section.title}
              </h3>
            ))}
          </div>
          <div className="w-full px-4 mb-8">
            {category.items.map((section: dishTag, index: number) => (
              selectedSection === section.title && (
                <div
                  key={index}
                  className="menu-section"
                >
                  <MenuSection
                    {...section}
                    onClick={() => handleSectionClick(section.title)}
                    isSelected={selectedSection === section.title}
                  />
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default MenuCardAll;
  