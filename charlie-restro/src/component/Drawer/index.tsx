'use client'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FiAlignJustify } from 'react-icons/fi';
import { IoClose } from "react-icons/io5";

import Link from 'next/link';
import { styled } from '@mui/material/styles';
import './styleDrawer.css';

import menuDataDummy from '../../AllData/menuList';
import { useEffect, useRef, useState } from 'react';
import {  getAllMenuPath } from '@/service/apiService';
import { useDispatch, useSelector } from 'react-redux';
import { MenuData } from '@/Redux/menu/slice';
import { RootState } from '@/Redux/store';
import { any } from 'zod';
import { getDictionary } from '@/getDictionary';
import { useParams } from 'next/navigation';

const CustomAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: 'transparent',
  color: '#ffffff',
  boxShadow: 'none',
  '&:before': {
    display: 'none',
  },
  '& .MuiAccordionSummary-root': {
    padding: '16px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.5)',
    transition: 'border-bottom 0.7s ease, color 0.7s ease',
  },
  '& .MuiAccordionSummary-content': {
    margin: '0px !Important',
  },
  '&.Mui-expanded': {
    margin: '0px !Important',
  },
  '& .MuiAccordionDetails-root': {
    padding: theme.spacing(2),
  },
  '& .MuiCollapse-root': {
    transition: 'height 0.5s ease-in-out',
  },
}));

const CustomButton = styled(Button)(({ theme }) => ({
  color: '#ffffff',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
}));

const DrawerContent = styled(Box)(({ theme }) => ({
  width: '600px',
  height: '100%',
  border: 'none',
  overflowY: 'auto',
  scrollbarWidth: 'thin',
  transition: 'transform 1s ease-in-out',
  '&::-webkit-scrollbar': {
    width: '2px',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#ffffff',
    borderRadius: '4px',
  },
  [theme.breakpoints.up('lg')]: {
    width: '700px',
  },
  [theme.breakpoints.down('md')]: {
    width: '500px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '350px',
  },
  [theme.breakpoints.down('xs')]: {
    width: '300px',
  },
  '& .MuiTypography-root': {
    fontSize: '24px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '12px',
    },
  },
}));

const MenuItemTypography = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(2),
  borderBottom: '1px solid rgba(255, 255, 255, 0.5)',
  transition: 'border-bottom 0.7s ease, color 0.7s ease',
  '& a': {
    textDecoration: 'none',
    color: '#ffffff',
    transition: 'color 0.7s ease'
  },
  '&:hover': {
    borderBottom: '1px solid gold',
    '& a': {
      color: 'gold',
    },
  },
}));

const NoBorderMenuItemTypography = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(2),
  borderBottom: 'none',
  '& a': {
    textDecoration: 'none',
    color: '#ffffff',
    transition: 'color 0.7s ease'
  },
  '&:hover': {
    '& a': {
      color: 'gold',
    },
  },
}));

export const RightSideDrawer = () => {

const [menuData, setMenuData]:any = useState(menuDataDummy)
  const dispatch = useDispatch();
  const selector:any = useSelector((state: RootState) => state.menu);
  const isLoading = useRef(false);
  const pathName:any=useParams()

  useEffect(() => {
    const fechAllMenu = async () => {

      if (isLoading.current) return;

      isLoading.current = true;
      
      try {
        const result = await getAllMenuPath();
        
        const filterFirstLevelCategories = (menuData:any) => {
          return menuData.map((element:any) => {
            const filteredItems = element.items.map((item:any) => {
              return { ...item, items: null };
            });
    
            return { ...element, items: filteredItems };
          });
        };
    
        const filteredMenuData = filterFirstLevelCategories(result.data);
        const data=await getDictionary(pathName.lang)
        

        const fullMenuData = [
          { name:data.header[0], path: `/${pathName.lang}` },
          // { name: data.header[1], path: `/${pathName.lang}/menu` },
          ...filteredMenuData,
          { name: data.header[2], path: `/${pathName.lang}/gruppenangebot` },
          { name: data.header[3], path: `/${pathName.lang}/reservierung` },
          { name: data.header[4], path: `/${pathName.lang}/einrichtungen` },
          { name: data.header[5], path: `/${pathName.lang}/galerie` },
          { name: data.header[6], path: `/${pathName.lang}/blog` },
          { name: data.header[7], path: `/${pathName.lang}/kontakt` }
        ];
    
        setMenuData(fullMenuData);
        dispatch(MenuData(filteredMenuData));
      } catch (error) {
        console.error(error);
      } finally {
        isLoading.current = false;
      }
    };

    fechAllMenu();
  }, [dispatch,pathName.lang]);

  

  const [state, setState] = useState({
    right: false,
  });

  const [expandedAccordions, setExpandedAccordions] = useState<{ [key: string]: boolean }>({});

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setState({ ...state, right: open });
  };

  const handleMouseEnter = (name: string) => {
    setExpandedAccordions((prev) => ({ ...prev, [name]: true }));
  };

  const handleMouseLeave = (name: string) => {
    setExpandedAccordions((prev) => ({ ...prev, [name]: false }));
  };

  const handleMenuItemClick = () => {
    setState({ ...state, right: false });
  };

  const renderAccordion = (item: any) => (
    <CustomAccordion
      key={item.name}
      expanded={expandedAccordions[item.name] || false}
      onMouseEnter={() => handleMouseEnter(item.name)}
      onMouseLeave={() => handleMouseLeave(item.name)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon style={{ color: '#ffffff' }} />}
        aria-controls={`${item.name}-content`}
        id={`${item.name}-header`}
        sx={{
          '&:hover': {
            borderBottom: '1px solid gold',
            color: 'gold',
          },
          '&.Mui-expanded': {
            borderBottom: '1px solid gold',
            color: 'gold',
          },
        }}
      >
        <Typography style={{textTransform:'uppercase'}}>{item.name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box>
          {item.items.map((subItem: any) =>
            subItem.items ? renderAccordion(subItem) : (
              <NoBorderMenuItemTypography key={subItem.name}>
                <Link href={subItem.path} >
                  <Typography component="span" onClick={handleMenuItemClick}>
                    {subItem.name}
                  </Typography>
                </Link>
              </NoBorderMenuItemTypography>
            )
          )}
        </Box>
      </AccordionDetails>
    </CustomAccordion>
  );

  const accordionContent = () => (
    <DrawerContent role="presentation" sx={{ '& > .MuiPaper-root': { backgroundColor: 'transparent' }, padding: '40px' }}>
      <Box sx={{ display: 'flex' }}>
        <CustomButton sx={{ marginLeft: 'auto', marginRight: '0px' }} onClick={toggleDrawer(false)}>
          <IoClose size={30} />
        </CustomButton>
      </Box>
      {menuData.map((item:any) =>
        item.items ? renderAccordion(item) : (
          <MenuItemTypography key={item.name}>
            <Link href={item.path} >
              <Typography component="span" onClick={handleMenuItemClick}>
                {item.name}
              </Typography>
            </Link>
          </MenuItemTypography>
        )
      )}
    </DrawerContent>
  );

  return (
    <div>
       <div onClick={toggleDrawer(true)} className="rounded-full inline-block cursor-pointer">
    <div className="bg-black bg-opacity-30 backdrop-blur-lg rounded-full p-2 hover:bg-opacity-80">
        <FiAlignJustify color='white' size={30} />
      </div>
      </div>
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer(false)}
        sx={{
          '& > .MuiPaper-root': {
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(40px) brightness(115%)'
          },
        }}
      >
        {accordionContent()}
      </Drawer>
    </div>
  );
};
