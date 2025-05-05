import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Loading from './loading';
import { Providers } from '@/Redux/providers';
import { LandingUrl } from '@/Api';
import { getDictionary } from '@/getDictionary';
import Script from 'next/script';

// Lazy loading components for better performance
const Footer = dynamic(() => import('@/component/footer'), { ssr: false });
const Header = dynamic(() => import('@/component/header'), { ssr: false });
const BottomBar = dynamic(() => import('@/component/bottomBar'), { ssr: false });
const CookieConsent = dynamic(() => import('../../component/cookie/cokkieConstant'), { ssr: false });
const Template = dynamic(() => import('./template'), { ssr: false });

const inter = Inter({ subsets: ['latin'] });

// const restaurantSchema = {
//   "@context": "https://schema.org",
//   "@type": "Restaurant",
//   "name": "Mundo Tapas - Alt Mariendorf",
//   "image": "/image/alt/banner/slide1.jpg",
//   "@id": "",
//   "url": "https://alt-mariendorf.tapas-mundo.com/",
//   "telephone": "+49-3025294284",
//   "priceRange": "€€",
//   "menu": "https://alt-mariendorf.tapas-mundo.com/men%C3%BCkarte-menu-card/speisekarte-a-la-carte",
//   "servesCuisine": "Spanish and Latin American cuisine",
//   "acceptsReservations": "true",
//   "address": {
//     "@type": "PostalAddress",
//     "streetAddress": "Alt-Mariendorf 32",
//     "addressLocality": "Berlin",
//     "postalCode": "12107",
//     "addressCountry": "DE"
//   },
//   "geo": {
//     "@type": "GeoCoordinates",
//     "latitude": 52.4404895,
//     "longitude": 13.3849727
//   },
//   "openingHoursSpecification": [
//     { "@type": "OpeningHoursSpecification", "dayOfWeek": "Wednesday", "opens": "10:00", "closes": "13:00" },
//     { "@type": "OpeningHoursSpecification", "dayOfWeek": "Thursday", "opens": "10:00", "closes": "13:00" },
//     { "@type": "OpeningHoursSpecification", "dayOfWeek": "Friday", "opens": "10:00", "closes": "12:00" },
//     { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "09:00", "closes": "12:00" },
//     { "@type": "OpeningHoursSpecification", "dayOfWeek": "Sunday", "opens": "09:00", "closes": "14:00" },
//     { "@type": "OpeningHoursSpecification", "dayOfWeek": "Monday", "opens": "10:00", "closes": "13:00" },
//     { "@type": "OpeningHoursSpecification", "dayOfWeek": "Tuesday", "opens": "10:00", "closes": "13:00" }
//   ],
//   "sameAs": [
//     "https://www.facebook.com/mundo.berlin",
//     "https://x.com/mundoberlin",
//     "https://www.instagram.com/mundo.berlin",
//     "https://www.youtube.com/@TapasMundoRestaurantBar",
//     "https://de.pinterest.com/tapasmundo/_profile/",
//     "https://tapas-mundo.com/"
//   ]
// };


const resName = ['Alt-Mariendorf', 'Checkpoint Charlie', 'Potsdamer Platz'];

export default async function RootLayout({ children, params }: { children: React.ReactNode, params: { lang: string } }) {
  const langData = await getDictionary(params.lang);

  return (
    <html lang={params.lang}>
      <head>
        {/* SEO Meta Tags */}
        <title>Tapas Mundo Restaurant in Alt-Mariendorf, Berlin | Authentische Spanische Küche</title>
        <meta name="description" content="Besuchen Sie Tapas Mundo in Alt-Mariendorf, Berlin, für authentische spanische Aromen. Genießen Sie köstliches Essen, feine Weine und eine unvergessliche authentische spanische Küche." />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="dCfEWwIeSKjORIHeIRjOEg_MIKkAoUoytzoHCuj3VgI" />
        <link rel="icon" href="/favicon.ico" />

        {/* Google Analytics */}
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-XZCL6LSBRR" />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XZCL6LSBRR');
            `,
          }}
        />

        {/* Structured Data for SEO */}
        {/* <Script
          id="restaurantSchema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        /> */}
      </head>

      <body className={inter.className}>
        <Providers>
          <Suspense fallback={<Loading />}>
            <Header lang={params.lang} langData={langData.header} LandingUrl={LandingUrl} logo={'/image/logo.svg'} resName={resName} />
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
