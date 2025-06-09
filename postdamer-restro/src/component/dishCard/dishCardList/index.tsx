import React from 'react';
import DishCard, { DishDetail } from '../dishCardMain';

export interface MenuSectionProps {
    title: string;
    dishes: any[];
    onClick?: () => void;
    isSelected?: boolean;
}

const MenuSection: React.FC<MenuSectionProps> = ({dishes}) => {

    console.log(dishes);
    
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-4 with-transition">
            {dishes.map((dish, index) => (
                <DishCard key={index} {...dish} />
            ))}
        </div>
    );
};

export default MenuSection;
