import dynamic from 'next/dynamic';
import Head from 'next/head';
import { getDictionary } from '@/getDictionary';
import { LoadingSkeleton } from '@/layouts/Loader';
import MundoIntro from '@/component/homePageContent/homePageContent';
import { Metadata } from 'next';
import Script from 'next/script';

// Lazy load components to improve performance
const NewAugCarousel = dynamic(() => import('@/component/newAugCrousel'),{
  loading: () => <LoadingSkeleton />});
const SpecialOpening = dynamic(() => import('@/layouts/specialOpening'), { ssr: false });
const OurServiceLanding = dynamic(() => import('@/component/ourServiceSection'), { ssr: false });
const ReserveTable = dynamic(() => import('@/component/reserveTable'), { ssr: false });

export const metadata:Metadata = {
  title: 'Tapas Mundo Restaurant in Alt-Mariendorf, Berlin | Authentic Spanish Cuisine',
  alternates: {
    canonical: 'https://alt-mariendorf.tapas-mundo.com/en',
  },
  description:
    'Visit Tapas Mundo in Alt-Mariendorf, Berlin, for authentic Spanish flavors. Enjoy delicious food, fine wines, and an unforgettable Authentic Spanish Cuisine.',
};


const restaurantSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://alt-mariendorf.tapas-mundo.com/#website",
      "url": "https://alt-mariendorf.tapas-mundo.com",
      "name": "Mundo Tapas - Alt Mariendorf",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://alt-mariendorf.tapas-mundo.com/?s={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "SiteNavigationElement",
      "name": "Home",
      "url": "https://alt-mariendorf.tapas-mundo.com"
    },
    {
      "@type": "SiteNavigationElement",
      "name": "Menu",
      "url": "https://alt-mariendorf.tapas-mundo.com/men%C3%BCkarte-menu-card/speisekarte-a-la-carte"
    },
    {
      "@type": "SiteNavigationElement",
      "name": "Group Offer",
      "url": "https://alt-mariendorf.tapas-mundo.com/en/gruppenangebot"
    },
    {
      "@type": "SiteNavigationElement",
      "name": "Facilities",
      "url": "https://alt-mariendorf.tapas-mundo.com/en/einrichtungen"
    },
    {
      "@type": "SiteNavigationElement",
      "name": "Gallery",
      "url": "https://alt-mariendorf.tapas-mundo.com/en/galerie"
    },
    {
      "@type": "SiteNavigationElement",
      "name": "Reservations",
      "url": "https://alt-mariendorf.tapas-mundo.com/en/reservierung"
    },
    {
      "@type": "SiteNavigationElement",
      "name": "Blog",
      "url": "https://alt-mariendorf.tapas-mundo.com/en/blog"
    },
    {
      "@type": "SiteNavigationElement",
      "name": "Contact",
      "url": "https://alt-mariendorf.tapas-mundo.com/en/kontakt"
    },
    {
      "@type": "Restaurant",
      "name": "Mundo Tapas - Alt Mariendorf",
      "image": "https://alt-mariendorf.tapas-mundo.com/image/alt/banner/slide1.jpg",
      "@id": "https://alt-mariendorf.tapas-mundo.com/#restaurant",
      "url": "https://alt-mariendorf.tapas-mundo.com/",
      "telephone": "+49-3025294284",
      "priceRange": "€€",
      "menu": "https://alt-mariendorf.tapas-mundo.com/men%C3%BCkarte-menu-card/speisekarte-a-la-carte",
      "servesCuisine": [
        "Spanish cuisine",
        "Latin American cuisine",
        "Tapas"
      ],
      "acceptsReservations": true,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Alt-Mariendorf 32",
        "addressLocality": "Berlin",
        "postalCode": "12107",
        "addressCountry": "DE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 52.4404895,
        "longitude": 13.3849727
      },
      "openingHoursSpecification": [
        { "@type": "OpeningHoursSpecification", "dayOfWeek": "Monday", "opens": "10:00", "closes": "13:00" },
        { "@type": "OpeningHoursSpecification", "dayOfWeek": "Tuesday", "opens": "10:00", "closes": "13:00" },
        { "@type": "OpeningHoursSpecification", "dayOfWeek": "Wednesday", "opens": "10:00", "closes": "13:00" },
        { "@type": "OpeningHoursSpecification", "dayOfWeek": "Thursday", "opens": "10:00", "closes": "13:00" },
        { "@type": "OpeningHoursSpecification", "dayOfWeek": "Friday", "opens": "10:00", "closes": "12:00" },
        { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "09:00", "closes": "12:00" },
        { "@type": "OpeningHoursSpecification", "dayOfWeek": "Sunday", "opens": "09:00", "closes": "14:00" }
      ],
      "sameAs": [
        "https://www.facebook.com/mundo.berlin",
        "https://x.com/mundoberlin",
        "https://www.instagram.com/mundo.berlin",
        "https://www.youtube.com/@TapasMundoRestaurantBar",
        "https://de.pinterest.com/tapasmundo/_profile/",
        "https://tapas-mundo.com/"
      ]
    }
  ]
};



const productSchema = {
  "@context": "http://schema.org/",
  "@type": "Product",
  "name": "Mundo Tapas Bar & Restaurant in Berlin | Spanish Dining in Alt-Mariendorf",
  "image": "https://alt-mariendorf.tapas-mundo.com/image/alt/banner/slide3.jpg",
  "description": "Experience the authentic flavors of Spain at Mundo Tapas Bar & Restaurant in the heart of Alt-Mariendorf, Berlin. From traditional tapas and rich meat dishes to flavorful vegetarian options, our menu brings a true taste of Spanish cuisine to your table. Enjoy a warm, welcoming atmosphere perfect for casual dining, family gatherings, or special occasions.",
  "review": {
    "@type": "Review",
    "reviewBody": "Mundo Tapas Bar & Restaurant in Berlin | Spanish Dining in Alt-Mariendorf",
    "author": "Mundo Tapas - Alt Mariendorf"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "bestRating": "5",
    "reviewCount": "1500"
  }
};


export default async function Home({ params }: { params: { lang: string } }) {
  // Load dictionary data from JSON
  const langData = await getDictionary(params.lang);

  if (!langData) {
    return (
     <></>
    );
  }

  return (
    <>
        <NewAugCarousel langData={langData.cruselData} />
        <MundoIntro content={langData.mainH}/>
        <SpecialOpening lang={params.lang} langData={langData.special} />
        <OurServiceLanding lang={params.lang} langData={langData.facilities} />
        <ReserveTable langData={langData.reserve} />
        <Script
        id="restaurantSchema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        strategy="lazyOnload"
      />
        <Script
        id="productSchema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        strategy="lazyOnload"
      />
    </>
  );
}
