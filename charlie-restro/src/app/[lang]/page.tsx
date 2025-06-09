import dynamic from 'next/dynamic';
import { getDictionary } from '@/getDictionary';
import Head from 'next/head';
import { LoadingSkeleton } from '@/layouts/Loader';
import MundoIntro from '@/component/homePageContent/homePageContent';
import Script from 'next/script';
import { Metadata } from 'next';

// Lazy Load Components for Performance Optimization
const NewAugCarousel = dynamic(() => import('@/component/newAugCrousel'), {
  loading: () => <LoadingSkeleton />,
});

const SpecialOpening = dynamic(() => import('@/layouts/specialOpening'), {
  ssr: false, // Renders only on the client to avoid unnecessary SSR
});

const OurServiceLanding = dynamic(
  () => import('@/component/ourServiceSection'),
  {
    ssr: false,
  }
);

const ReserveTable = dynamic(() => import('@/component/reserveTable'), {
  ssr: false,
});

// Optional Popup (Uncomment when needed)
// const OfferPopup = dynamic(() => import('@/component/POPUP'), {
//   loading: () => <p>Loading...</p>,
//   ssr: false,
// });

type Params = {
  params: {
    lang: string;
  };
};

const restaurantSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://checkpoint-charlie.tapas-mundo.eu/#website',
      url: 'https://checkpoint-charlie.tapas-mundo.eu/',
      name: 'Mundo Tapas - Checkpoint Charlie',
      potentialAction: {
        '@type': 'SearchAction',
        target:
          'https://checkpoint-charlie.tapas-mundo.eu/?s={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'Restaurant',
      name: 'Mundo Tapas - Checkpoint Charlie',
      image:
        'https://checkpoint-charlie.tapas-mundo.eu/_next/image?url=%2Fimage%2Fcrousel%2Fslide1.webp&w=1920&q=100',
      '@id': '',
      url: 'https://checkpoint-charlie.tapas-mundo.eu/',
      telephone: '+49-3025294284',
      priceRange: '€€',
      menu: 'https://checkpoint-charlie.tapas-mundo.eu/menü-karte-menu-card/speisekarte-a-la-carte',
      servesCuisine: 'Spanish and Latin American cuisine',
      acceptsReservations: 'true',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'am Checkpoint Charlie, Zimmerstraße 19',
        addressLocality: 'Berlin',
        postalCode: '10969',
        addressCountry: 'DE',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 52.5075455,
        longitude: 13.38716,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
      sameAs: [
        'https://www.facebook.com/mundo.berlin',
        'https://x.com/mundoberlin',
        'https://www.instagram.com/mundo.berlin',
        'https://www.youtube.com/@TapasMundoRestaurantBar',
        'https://de.pinterest.com/tapasmundo/_profile/',
        'https://tapas-mundo.com/',
      ],
      siteNavigation: [
        {
          '@type': 'SiteNavigationElement',
          name: 'Home',
          url: 'https://checkpoint-charlie.tapas-mundo.eu/',
        },
        {
          '@type': 'SiteNavigationElement',
          name: 'Menu',
          url: 'https://checkpoint-charlie.tapas-mundo.eu/men%C3%BC-karte-menu-card/speisekarte-a-la-carte',
        },
        {
          '@type': 'SiteNavigationElement',
          name: 'Group Offer',
          url: 'https://checkpoint-charlie.tapas-mundo.eu/en/gruppenangebot',
        },
        {
          '@type': 'SiteNavigationElement',
          name: 'Facilities',
          url: 'https://checkpoint-charlie.tapas-mundo.eu/en/einrichtungen',
        },
        {
          '@type': 'SiteNavigationElement',
          name: 'Gallery',
          url: 'https://checkpoint-charlie.tapas-mundo.eu/en/galerie',
        },
        {
          '@type': 'SiteNavigationElement',
          name: 'Reservations',
          url: 'https://checkpoint-charlie.tapas-mundo.eu/en/reservierung',
        },
        {
          '@type': 'SiteNavigationElement',
          name: 'Blog',
          url: 'https://checkpoint-charlie.tapas-mundo.eu/en/blog',
        },
        {
          '@type': 'SiteNavigationElement',
          name: 'Contact',
          url: 'https://checkpoint-charlie.tapas-mundo.eu/en/kontakt',
        },
      ],
    },
  ],
};

const productSchema = {
  '@context': 'https://schema.org/',
  '@type': 'Product',
  name: 'Welcome to Tapas Mundo – Best Restaurant at Checkpoint Charlie in Berlin',
  image:
    'https://checkpoint-charlie.tapas-mundo.eu/_next/image?url=%2Fimage%2Fcrousel%2Fslide2.webp&w=828&q=100',
  description:
    'Looking for the best Spanish restaurant near Checkpoint Charlie in Berlin? Welcome to Tapas Mundo, the top destination for authentic Spanish tapas and Mediterranean cuisine in the heart of Berlin. Just steps away from the famous Checkpoint Charlie, our restaurant offers a cozy yet vibrant atmosphere where locals and tourists can indulge in delicious, freshly prepared dishes inspired by the rich culinary traditions of Spain.',
  review: {
    '@type': 'Review',
    reviewBody:
      'Welcome to Tapas Mundo – Best Restaurant at Checkpoint Charlie in Berlin',
    author: {
      '@type': 'Organization',
      name: 'Mundo Tapas - Checkpoint Charlie',
    },
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    bestRating: '5',
    reviewCount: '1400',
  },
};

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const lang = params.lang;

  return {
    title:
      'Tapas Mundo Restaurant in Checkpoint Charlie, Berlin | Authentic Spanish Cuisine',
    description:
      'Visit Tapas Mundo in Checkpoint Charlie, Berlin, for authentic Spanish flavors. Enjoy delicious food, fine wines, and an unforgettable Authentic Spanish Cuisine.',
    alternates: {
      canonical: `https://checkpoint-charlie.tapas-mundo.eu/${lang}`,
    },
  };
}

export default async function Home({ params }: Params) {
  const langData = await getDictionary(params.lang);

  if (!langData) {
    return <></>;
  }

  return (
    <>
      <NewAugCarousel langData={langData.cruselData} />
      <MundoIntro content={langData.mainH} />
      <SpecialOpening lang={params.lang} langData={langData.special} />
      <OurServiceLanding lang={params.lang} langData={langData.facilities} />
      <ReserveTable langData={langData.reserve} />
      {/* <OfferPopup langData={langData.offerPopup} /> */}
      <Script
        id='restaurantSchema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        strategy='lazyOnload'
      />
      <Script
        id='productSchema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        strategy='lazyOnload'
      />
    </>
  );
}
