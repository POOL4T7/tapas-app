import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Suspense } from 'react';
import Loading from './loading';
import { Providers } from '@/Redux/providers';
import { LandingUrl } from '@/Api';

import { getDictionary } from '@/getDictionary';

import OfferPopup from '@/component/POPUP';
import Script from 'next/script';
import dynamic from 'next/dynamic';
const Footer = dynamic(() => import('@/component/footer'), { ssr: false });
const Header = dynamic(() => import('@/component/header'), { ssr: false });
const BottomBar = dynamic(() => import('@/component/bottomBar'), { ssr: false });
const CookieConsent = dynamic(() => import('@/component/cookie/cokkieConstant'), { ssr: false });
const Template = dynamic(() => import('./template'), { ssr: false });

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tapas Mundo restaurant in Checkpoint Charlie, Berlin',
  description:
    'Experience authentic Spanish tapas at Tapas Mundo, located near Checkpoint Charlie in Berlin. Savor a delightful fusion of flavors in a vibrant atmosphere!',
};

const resName = ['Alt-Mariendorf', 'Checkpoint Charlie', 'Potsdamer Platz'];

// const restaurantSchema = {
//   "@context": "https://schema.org",
//   "@type": "Restaurant",
//   "name": "Mundo Tapas - Checkpoint Charlie",
//   "image": "https://checkpoint-charlie.tapas-mundo.com/_next/image?url=%2Fimage%2Fcrousel%2Fslide1.webp&w=1920&q=100",
//   "@id": "",
//   "url": "https://checkpoint-charlie.tapas-mundo.com/",
//   "telephone": "+49-3025294284",
//   "priceRange": "€€",
//   "menu": "https://checkpoint-charlie.tapas-mundo.com/menü-karte-menu-card/speisekarte-a-la-carte",
//   "servesCuisine": "Spanish and Latin American cuisine",
//   "acceptsReservations": "true",
//   "address": {
//     "@type": "PostalAddress",
//     "streetAddress": "am Checkpoint Charlie, Zimmerstraße 19",
//     "addressLocality": "Berlin",
//     "postalCode": "10969",
//     "addressCountry": "DE"
//   },
//   "geo": {
//     "@type": "GeoCoordinates",
//     "latitude": 52.5075455,
//     "longitude": 13.38716
//   },
//   "openingHoursSpecification": {
//     "@type": "OpeningHoursSpecification",
//     "dayOfWeek": [
//       "Monday",
//       "Tuesday",
//       "Wednesday",
//       "Thursday",
//       "Friday",
//       "Saturday",
//       "Sunday"
//     ],
//     "opens": "00:00",
//     "closes": "23:59"
//   },
//   "sameAs": [
//     "https://www.facebook.com/mundo.berlin",
//     "https://x.com/mundoberlin",
//     "https://www.instagram.com/mundo.berlin",
//     "https://www.youtube.com/@TapasMundoRestaurantBar",
//     "https://de.pinterest.com/tapasmundo/_profile/",
//     "https://tapas-mundo.com/"
//   ]
// };

export default async function RootLayout({ children, params }: any) {
  const langData = await getDictionary(params.lang);

  return (
    <html lang={params.lang}>
      {/* SEO Meta Tags */}
      <title>Tapas Mundo restaurant in Checkpoint Charlie, Berlin</title>
      <meta name="description" content="Experience authentic Spanish tapas at Tapas Mundo, located near Checkpoint Charlie in Berlin. Savor a delightful fusion of flavors in a vibrant atmosphere!" />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <meta name="google-site-verification" content="dCfEWwIeSKjORIHeIRjOEg_MIKkAoUoytzoHCuj3VgI" />
      
      <link rel="icon" href="/favicon.ico" />

      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-NN83VEW081"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-NN83VEW081');
            `,
          }}
        />
        {/* <Script
          id="restaurantSchema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        /> */}

      </head>

      <body className={inter.className}>
        <Providers>
          <Suspense fallback={<Loading />}>
            <Header
              lang={params.lang}
              langData={langData.header}
              LandingUrl={LandingUrl}
              logo={'/image/logo.svg'}
              resName={resName}
            />
            <Template>{children}</Template>
            <BottomBar langData={langData.bottom} />
            <Footer langData={langData.footer} />
            <CookieConsent data={langData.cookie} />
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
