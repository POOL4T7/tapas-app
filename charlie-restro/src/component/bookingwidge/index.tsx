'use client';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/dropdown';
import React, { useEffect, useState } from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from '@nextui-org/react';
import styles from './styles.module.css';
import { IoIosRestaurant } from 'react-icons/io';

const BookingWidget = (props: any) => {
  const langData = props.langData;
  const header = props.header;
  const popup = props.popup;
  const bottom = props.bottom;
  const banner = props.banner;
  const heading = props.heading || 'Book Now';
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, setValue] = useState(langData.selectRestaurant);
  const [selectedValue, setSelectedValue] = useState(
    langData.selectRestaurant || 'Please select restaurant'
  );

  const [isMobile, setIsMobile] = useState(false);

  const handleBooking = (key: any) => {
    if (key === 'Alt-Mariendorf') {
      const widgetContainer = document.getElementById('quandoo-booking-widget');
      if (widgetContainer) {
        widgetContainer.innerHTML = ''; // Clear previous content

        const script = document.createElement('script');
        script.src = 'https://booking-widget.quandoo.com/index.js';
        script.async = true;
        script.setAttribute('data-merchant-id', '100092');
        script.setAttribute('data-theme', 'light');
        script.setAttribute('data-primary-color', '1870C3');
        // utm parameter
        script.setAttribute('data-utm-source', 'website');
        script.setAttribute('data-utm-medium', 'button');
        script.setAttribute('data-utm-campaign', 'tapas_mundo');
        script.setAttribute('data-utm-content', 'form_button');

        widgetContainer.appendChild(script);
      }
    } else if (key === 'Checkpoint Charlie') {
      const widgetContainer = document.getElementById('quandoo-booking-widget');
      if (widgetContainer) {
        widgetContainer.innerHTML = ''; // Clear previous content

        const script = document.createElement('script');
        script.src = 'https://booking-widget.quandoo.com/index.js';
        script.async = true;
        script.setAttribute('data-merchant-id', '92093');
        script.setAttribute('data-theme', 'light');
        script.setAttribute('data-primary-color', 'f5b016');
        // utm parameter
        script.setAttribute('data-utm-source', 'website');
        script.setAttribute('data-utm-medium', 'button');
        script.setAttribute('data-utm-campaign', 'tapas_mundo');
        script.setAttribute('data-utm-content', 'form_button');
        widgetContainer.appendChild(script);
      }
    } else if (key === 'Potsdamer Platz') {
      const widgetContainer = document.getElementById('quandoo-booking-widget');
      if (widgetContainer) {
        widgetContainer.innerHTML = 'Comming Soon'; // Clear previous content

        // const script = document.createElement('script');
        // script.src = 'https://booking-widget.quandoo.com/index.js';
        // script.async = true;
        // script.setAttribute('data-merchant-id', '100092');
        // script.setAttribute('data-theme', 'light');
        // script.setAttribute('data-primary-color', 'f5b016');
        // widgetContainer.appendChild(script);
      }
    } else {
      setValue(langData.pleaseSelectRestaurant);
    }
  };

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

  const items = [
    {
      key: 'Alt-Mariendorf',
      label: 'Mundo Tapas',
      des: 'Alt-Mariendorf',
    },
    {
      key: 'Checkpoint Charlie',
      label: 'Mundo Tapas',
      des: 'Checkpoint Charlie',
    },
    {
      key: 'Potsdamer Platz',
      label: 'Mundo Tapas',
      des: 'Potsdamer Platz',
    },
  ];

  const handleOpen = () => {
    setValue(selectedValue); // Restore the previous selection when the modal opens
    onOpen();
  };

  const handleClose = () => {
    setValue(langData.pleaseSelectRestaurant);
    // setSelectedValue(value); // Save the current selection before closing the modal
    onClose();
  };

  return (
    <div>
      {header ? (
        <div
          onClick={handleOpen}
          className='rounded-full inline-block cursor-pointer'
        >
          <div className='bg-black bg-opacity-30 backdrop-blur-lg rounded-full p-2 hover:bg-opacity-80'>
            <IoIosRestaurant color='#ffcc00' size={30} />
          </div>
        </div>
      ) : popup ? (
        <Button
          onPress={handleOpen}
          className='bg-black text-white py-2 px-4 rounded-lg'
        >
          {langData.button1}
        </Button>
      ) : bottom ? (
        <Button
          onPress={handleOpen}
          style={{ fontSize: 'smaller' }}
          className=' h-full w-full px-4 py-4 bg-[gold] rounded-none'
        >
          {langData[0]}
        </Button>
      ) : banner ? (
        <Button
          onPress={handleOpen}
          className='bg-[gold] text-black px-3 py-1.5 md:px-4 md:py-2 rounded text-sm md:text-base'
        >
          {langData.button1}
        </Button>
      ) : (
        <Button
          onPress={handleOpen}
          style={{ width: '140px' }}
          size='lg'
          variant='ghost'
          color='warning'
        >
          {heading}
        </Button>
      )}

      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        aria-labelledby='modal-title'
      >
        <ModalContent>
          <ModalHeader />
          <ModalBody>
            <h2
              className='text-center text-xl'
              style={{ fontWeight: 'bold' }}
              id='modal-title'
            >
              Book Your Table
            </h2>

            <div className={styles.dropdown}>
              <Dropdown
                style={{ width: isMobile ? '80%' : '25%' }}
                className='w-full'
              >
                <DropdownTrigger>
                  <Button
                    size='lg'
                    variant='bordered'
                    color='warning'
                    style={{ width: '100%' }}
                  >
                    {value}
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  onAction={(key: any) => setValue(key)}
                  items={items}
                >
                  {(item) => (
                    <DropdownItem
                      key={item.key}
                      description={item.des}
                      color={item.key === 'delete' ? 'danger' : 'default'}
                      className={item.key === 'delete' ? 'text-danger' : ''}
                      onClick={() => handleBooking(item.key)}
                    >
                      {item.label}
                    </DropdownItem>
                  )}
                </DropdownMenu>
              </Dropdown>
            </div>
            <div id='quandoo-booking-widget'></div>
          </ModalBody>
          <ModalFooter>
            <Button onPress={handleClose} color='warning'>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default BookingWidget;
