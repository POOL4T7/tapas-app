import { FaHome, FaConciergeBell, FaMapMarkerAlt } from 'react-icons/fa';
import { PiChefHatFill } from "react-icons/pi";
import { GrLanguage } from "react-icons/gr";
import { TbMessageLanguage } from "react-icons/tb";
import { FaHandshakeSimple } from "react-icons/fa6";
import { IoIosRestaurant } from "react-icons/io";
import { MdFoodBank } from "react-icons/md";
import { SiWhatsapp } from "react-icons/si";
import { resturant1, resturant2, resturant3 } from '@/Api';

export type Menu = {
  id: number;
  title: string;
  path?: string;
  newTab: boolean;
  icon?: React.ReactNode;
  submenu?: Menu[];
};

export const getMenuData = (lang: string, dictionary: any): Menu[] => [
  {
    id: 1,
    title: dictionary.header.Home ,
    path: `/${lang}`,
    newTab: false,
    icon: <FaHome />,
  },
  {
    id: 2,
    title: dictionary.header["About Us"],
    path: `/${lang}/uberuns`,
    newTab: false,
    icon: <PiChefHatFill />,
  },
  {
    id: 3,
    title: dictionary.header["Our Services"],
    path: `/${lang}/dienstleistungen`,
    newTab: false,
    icon: <FaConciergeBell />,
  },
  {
    id: 5,
    title: dictionary.header["Select Restaurant"],
    newTab: false,
    icon: <FaMapMarkerAlt />,
    submenu: [
      {
        id: 6,
        title: dictionary.header["Alt-Mariendorf"],
        path: resturant1,
        newTab: false,
        icon: <MdFoodBank />,
      },
      {
        id: 7,
        title: dictionary.header["Checkpoint Charlie"],
        path: resturant2,
        newTab: false,
        icon: <MdFoodBank />,
      },
      {
        id: 8,
        title: dictionary.header["Potsdamer Platz"],
        path: resturant3,
        newTab: false,
        icon: <MdFoodBank />
      },
    ],
  },
  {
    id: 412,
    title: dictionary.header["Reservation"],
    newTab: false,
    icon: <IoIosRestaurant size={20} />,
    path: `#reserveT`,
  },
  {
    id: 41,
    title: dictionary.header["Meet Us"],
    newTab: false,
    icon: <FaHandshakeSimple size={20} />,
    path: `/${lang}/kontakt`,
  },
  {
    id: 51,
    title: lang,
    path: "",
    newTab: false,
    icon:
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <GrLanguage />
        <TbMessageLanguage size={24} />
      </div>,
    submenu: [
      {
        id: 11,
        title: dictionary.header["English"],
        path: `/en`,
        newTab: false,
        icon: <div style={{ display: 'flex', alignItems: 'center' }}>
          <GrLanguage />
          <TbMessageLanguage size={24} />
        </div>
      },
      {
        id: 12,
        title: dictionary.header["German"],
        path: `/de`,
        newTab: false,
        icon: <div style={{ display: 'flex', alignItems: 'center' }}>
          <GrLanguage />
          <TbMessageLanguage size={24} />
        </div>
      },
      {
        id: 13,
        title: dictionary.header["Spanish"],
        path: `/es`,
        newTab: false,
        icon: <div style={{ display: 'flex', alignItems: 'center' }}>
          <GrLanguage />
          <TbMessageLanguage size={24} />
        </div>
      }
    ]
  },
  {
    id: 531,
    title: '',
    path: "",
    newTab: false,
    icon: <SiWhatsapp size={20} color='#25D366' />,
    submenu: [
      {
        id: 634,
        title: dictionary.header["Alt-Mariendorf"],
        path: `https://wa.me/+493025294284?text=Hallo%20Tapas%20-%20Mundo%20-%20Alt-Mariendorf%20Team`,
        newTab: false,
        icon: <SiWhatsapp color='#25D366' />,
      },
      {
        id: 745,
        title: dictionary.header["Checkpoint Charlie"],
        path: `https://wa.me/+493025294284?text=Hallo%20Tapas%20-%20Mundo%20-%20Checkpoint%20Charlie%20Team`,
        newTab: false,
        icon: <SiWhatsapp color='#25D366' />,
      },
      {
        id: 845,
        title: dictionary.header["Potsdamer Platz"],
        path: `https://wa.me/+493025294284?text=Hello%20Tapas%20-%20Mundo%20-%20Potsdamer%20Platz%20Team`,
        newTab: false,
        icon: <SiWhatsapp color='#25D366' />
      },
    ],
  },
];
