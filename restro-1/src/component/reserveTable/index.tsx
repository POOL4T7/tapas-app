'use client';
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/dropdown';
import styles from './style.module.css';
import { Button } from '@nextui-org/button';
import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { FaMobileAlt } from 'react-icons/fa';
import { SiWhatsapp } from 'react-icons/si';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import BookingWidget from '../bookingwidge';

const ReserveTable = (props:any) => {
    const langData=props.langData
    const headingData = {
        heading: langData.heading,
        heading2: langData.heading2,
        book: langData.book,
        textUs: langData.textUs
    };

    const [value, setValue] = useState(langData.selectRestaurant);
    const [valueW, setValueW] = useState('');
    const [valueWhatsApp, setValueWhatsApp] = useState('Text Us');
    const [isMobile, setIsMobile] = useState(false);

    const pathname = usePathname();
    const reservationRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (pathname === '/#reserve') {
            reservationRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [pathname]);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (value !== langData.selectRestaurant) setValueW('');
    }, [value, langData.selectRestaurant]);

    const contact = useMemo(() => ({
        RestwhatsApp: 'https://wa.me/+493025294284?text=Hallo%20Tapas%20-%20Mundo%20-%20Alt-Mariendorf%20Team',
        RestwhatsApp2: 'https://wa.me/+493025294284?text=Hallo%20Tapas%20-%20Mundo%20-%20Checkpoint%20Charlie%20Team',
        RestwhatsApp3: 'https://wa.me/+493025294284?text=Hello%20Tapas%20-%20Mundo%20-%20Potsdamer%20Platz%20Team'
    }), []);

    useEffect(() => {
        const whatsappLinks: any = {
            'Alt-Mariendorf': contact.RestwhatsApp,
            'Checkpoint Charlie': contact.RestwhatsApp2,
            'Potsdamer Platz': contact.RestwhatsApp3
        };
        if (whatsappLinks[valueWhatsApp]) {
            window.open(whatsappLinks[valueWhatsApp], '_blank', 'noopener,noreferrer');
        }
    }, [valueWhatsApp, contact]);

    const navigation = useMemo(() => ({
        rest1: 'https://www.quandoo.dex/en/place/mundo-mariendorf-100092',
        rest2: 'https://www.quandoo.dex/en/place/mundo-2-restaurant-92093',
        rest3: ''
    }), []);

    const handleBooking = () => {
        const bookingLinks: any = {
            'Alt-Mariendorf': navigation.rest1,
            'Checkpoint Charlie': navigation.rest2,
            'Potsdamer Platz': navigation.rest3
        };
        if (bookingLinks[value]) {
            window.open(bookingLinks[value], '_blank', 'noopener,noreferrer');
        } else {
            setValueW(langData.pleaseSelectRestaurant);
        }
    };

    const items = [
        { key: 'Alt-Mariendorf', label: 'Mundo Tapas', des: 'Alt-Mariendorf' },
        { key: 'Checkpoint Charlie', label: 'Mundo Tapas', des: 'Checkpoint Charlie' },
        { key: 'Potsdamer Platz', label: 'Mundo Tapas', des: 'Potsdamer Platz' }
    ];

    return (
        <motion.section
        id="reserve"
        ref={reservationRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 1 }}
      >
     
        <div   className={styles.background}>
            <div style={{padding:'20px 0px'}} className={styles.main_container}>
            <div className={styles.slots}>{headingData.heading}</div>
                <div className={styles.wrapper}>

                
                <div className={styles.left}>
                <div className={styles.booking}>
             
                  
                         <BookingWidget heading={headingData.heading2} NoHeader={false} bottom={false} popup={false} header={false} banner={false} langData={langData}/>
             <div className={styles.button}>
         
            


             </div>
         </div>
                    <div>
                    </div>
                </div>
                <div className={styles.booking}>
                <div style={{display:'flex',alignItems:'center',justifyContent:'center',zIndex:1}} className={`${styles.dropdown} ${styles.dropdown1}`}>

                        <Dropdown style={{width:isMobile?'80%':'25%'}} className='w-full'>
                            <DropdownTrigger>
                                <Button
                                    size='lg'
                                    variant='bordered'
                                    color='warning'
                                    style={{width:'auto',zIndex:1}}
                                >
                                   <SiWhatsapp  color='#25D366' size={25} />&nbsp;{headingData.textUs}
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu
                            
                                onAction={(key: any) => setValueWhatsApp(key)}
                                items={items}>
                                {(item) => (
                                    <DropdownItem
                                    startContent={<SiWhatsapp  color='#25D366' size={20} />}
                                        key={item.key}
                                        description={item.des}
                                        color={item.key === "delete" ? "danger" : "default"}
                                        className={item.key === "delete" ? "text-danger" : ""}
                                    >
                                        {item.label}
                                    </DropdownItem>
                                )}
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                  
                  
                </div>
                <div className={styles.right}>
                    <BookingWidget NoHeader={false} bottom={false} popup={false} header={false} banner={false} langData={langData}/>

             
                </div>
                </div>
            </div>
        </div>
        </motion.section>
    );
};
export default ReserveTable