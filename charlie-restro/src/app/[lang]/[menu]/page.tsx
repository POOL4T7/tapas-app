import dynamic from 'next/dynamic';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  return {
    title: `Explore Our Menu | Tapas Mundo`,
    description: "Discover a variety of Spanish and Latin American dishes at Tapas Mundo. Explore our menu for an unforgettable dining experience.",
    alternates: {
      canonical: `https://alt-mariendorf.tapas-mundo.com/${params.lang}/menükarte-menu-card/speisekarte-a-la-carte`,
    },
  };
}

const AllMenuClient = dynamic(() => import('./allMenuClient'), { ssr: false });

const AllMenu = () => {
  return <AllMenuClient />;
};

export default AllMenu;
