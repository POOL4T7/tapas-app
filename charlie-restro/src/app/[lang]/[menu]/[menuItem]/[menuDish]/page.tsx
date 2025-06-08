import dynamic from 'next/dynamic';
import { Metadata } from 'next';

export async function generateMetadata({
    params,
  }: {
    params: { lang: string; menu: string; menuItem: string; menuDish: string };
  }): Promise<Metadata> {
    const { lang, menu, menuItem, menuDish } = params;
  
    return {
      title: `Dish Details | Tapas Mundo`,
      description: `Discover more about this dish on the Tapas Mundo menu.`,
      alternates: {
        canonical: `https://alt-mariendorf.tapas-mundo.com/${lang}/menü-karte-menu-card/${menuItem}/${menuDish}`,
      },
    };
  }

// Dynamically import client component
const MenuDishClient = dynamic(() => import('./menuDishClient'), { ssr: false });

const MenuDish = ({ params }: { params: { menuDish: string } }) => {
  return <MenuDishClient menuDish={params.menuDish} />;
};

export default MenuDish;
