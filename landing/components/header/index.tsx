'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import logo from '@/public/image/logoN.webp';
import { getMenuData } from './menuData';
import BookingWidget from '../bookingwidge';

const Header = (params: any) => {
  const menuData = getMenuData(params.lang, params.langData);

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);
  const pathname = usePathname();
  const navbarRef = useRef<HTMLDivElement | null>(null);

  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  const handleSubmenu = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const handleOutsideClick = (event: any) => {
    if (event.target.id != 'closeNav__') {
      setNavbarOpen(false);
      // }
    }
  };
  const [first, setfirst] = useState(false);
  const handleNavItemClick = (path: any) => {
    if (path === '#reserveT') {
      setfirst(true);
    } else {
      setfirst(false);
    }

    setNavbarOpen(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleStickyNavbar);
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      window.removeEventListener('scroll', handleStickyNavbar);
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <>
      <header
        className={`header left-0 top-0 z-40 flex w-full items-center ${
          sticky
            ? 'dark:bg-gray-dark dark:shadow-sticky-dark fixed z-[9] bg-gray-950 !bg-opacity-80 shadow-sticky backdrop-blur-sm transition'
            : 'absolute bg-transparent'
        }`}
      >
        <div className='w-full'>
          <div className='relative flex items-center justify-between'>
            <div className='w-60 max-w-full xl:mr-12'>
              <Link
                href='/'
                className={`header-logo block w-full`}
                style={{
                  width: '155px',
                  height: '100px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Image
                  src={logo}
                  height={120}
                  width={120}
                  style={{ height: 'auto', width: 'auto' }}
                  alt='Mundo Tapas Logo'
                  loading='lazy'
                />
              </Link>
            </div>
            <div
              style={{ color: 'white' }}
              className='flex items-center justify-end pr-16'
            >
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id='closeNav__'
                  aria-label='Mobile Menu'
                  className='absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden'
                >
                  <span
                    id='closeNav__'
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300 ${
                      navbarOpen ? ' top-[7px] rotate-45' : ' '
                    }`}
                  />
                  <span
                    id='closeNav__'
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300 ${
                      navbarOpen ? 'opacity-0 ' : ' '
                    }`}
                  />
                  <span
                    id='closeNav__'
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300 ${
                      navbarOpen ? ' top-[-8px] -rotate-45' : ' '
                    }`}
                  />
                </button>
                <nav
                  ref={navbarRef}
                  style={{
                    background: 'rgba(0,0,0,0.8)',
                    width: 'fit-content',
                  }}
                  id='navbarCollapse'
                  className={`firstNav navbar absolute right-0 z-30  rounded border-[.5px] border-body-color/50 px-2 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? 'visibility top-full opacity-100'
                      : 'invisible top-[120%] opacity-0'
                  }`}
                >
                  <ul
                    className='block lg:flex lg:space-x-12'
                    itemScope
                    itemType='https://schema.org/SiteNavigationElement'
                  >
                    {menuData.map((menuItem, index) => (
                      <li
                        id='closeNav__'
                        style={{
                          margin: menuItem.title === '' ? '0px' : '0rem 1rem',
                          width: 'fit-content',
                        }}
                        key={index}
                        className='group relative'
                        itemProp='name'
                      >
                        {menuItem.path ? (
                          <Link
                            id='closeNav__'
                            href={menuItem.path}
                            className={`flex items-center py-2 text-sm lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                              pathname === menuItem.path
                                ? 'text-[#ffcc00] dark:text-white'
                                : 'text-dark hover:text-[#ffcc00] dark:text-white/70 dark:hover:text-white'
                            }`}
                            onClick={() => handleNavItemClick(menuItem.path)}
                            title={menuItem.title}
                          >
                            {menuItem.icon && (
                              <span id='closeNav__' className='mr-2'>
                                {menuItem.icon}
                              </span>
                            )}
                            {menuItem.title}
                          </Link>
                        ) : (
                          <>
                            <button
                              onClick={() => handleSubmenu(index)}
                              id='closeNav__'
                              style={{
                                paddingLeft:
                                  menuItem.title === '' ? '1rem' : '',
                              }}
                              className='flex capitalize items-center cursor-pointer py-2 text-base text-dark group-hover:text-[#ffcc00] primary dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6'
                              aria-expanded={openIndex === index}
                              aria-controls={`submenu-${index}`}
                            >
                              {menuItem.icon && (
                                <span id='closeNav__' className='mr-2'>
                                  {menuItem.icon}
                                </span>
                              )}
                              {menuItem.title
                                ? menuItem.title
                                : navbarOpen
                                  ? params.text
                                  : ''}
                              {/* <span className="pl-3">
                                <svg width="25" height="24" viewBox="0 0 25 24">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span> */}
                            </button>
                            <div
                              id={`submenu-${index}`}
                              className={`submenu capitalize  left-0 top-full rounded-sm transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block  lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                                openIndex === index ? 'block' : 'hidden'
                              }`}
                              style={{
                                paddingLeft: index == 7 ? '1rem' : '',
                                backgroundColor: navbarOpen
                                  ? 'transparent'
                                  : 'rgba(0,0,0,0.8)',
                                color: 'white',
                                left:
                                  menuItem.title === ''
                                    ? navbarOpen
                                      ? 'initial'
                                      : '-10rem'
                                    : 'initial',
                              }}
                            >
                              {menuItem.submenu?.map(
                                (submenuItem, subIndex) => (
                                  <Link
                                    target={
                                      menuItem.title == '' ? '_blank' : ''
                                    }
                                    href={submenuItem.path || ''}
                                    key={subIndex}
                                    className='flex items-center py-2.5 text-sm text-white hover:text-[#ffcc00] lg:px-3'
                                    onClick={() =>
                                      handleNavItemClick(menuItem.path)
                                    }
                                    title={submenuItem.title}
                                  >
                                    {submenuItem.icon && (
                                      <span className='mr-2'>
                                        {submenuItem.icon}
                                      </span>
                                    )}
                                    {submenuItem.title}
                                  </Link>
                                )
                              )}
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <BookingWidget
        setfirst={setfirst}
        openM={first}
        NoHeader={true}
        bottom={false}
        popup={false}
        header={false}
        banner={false}
        langData={params.langData.reserve}
      />
    </>
  );
};

export default Header;
