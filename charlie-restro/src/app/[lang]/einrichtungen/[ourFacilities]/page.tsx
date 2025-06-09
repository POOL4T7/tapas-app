import dynamic from 'next/dynamic';
import { getDictionary } from '@/getDictionary';
import { LoadingSkeleton } from '@/layouts/Loader';
import { Metadata } from 'next';

const OurServicesID = dynamic(() => import('@/component/facilitesID'), {
  loading: () => <LoadingSkeleton />,
  ssr: false,
});
const ReserveTable = dynamic(() => import('@/component/reserveTable'), {
  ssr: false,
});

type Params = {
  ourFacilities: string;
  lang: string;
};

const headContent: Record<string, { title: string; description: string }> = {
  essbereich: {
    title:
      'Dining Area & Outdoor Patio – Enjoy Tapas Indoors & Outdoors in Berlin',
    description:
      'Enjoy a comfortable dining experience at Mundo Tapas Bar in Berlin. Choose between our stylish indoor seating or the refreshing outdoor patio for your perfect meal.',
  },
  'bar-mit-vollem-service': {
    title:
      'Full-Service Bar – Cocktails, Wines & More at Mundo Tapas Bar Berlin',
    description:
      'Unwind at Mundo Tapas Bar’s full-service bar in Berlin. From handcrafted cocktails to fine wines, enjoy expertly mixed drinks in a lively and welcoming setting!',
  },
  veranstaltungsraume: {
    title: 'Events - Celebrate at Mundo Tapas Bar with Flexible Spaces',
    description:
      'Planning a special event? From birthdays and weddings to baby showers and corporate dinners, Mundo Tapas Bar offers versatile spaces for any celebration. Get an unforgettable experience for guests of all sizes.',
  },
  'private-gruppe': {
    title: 'Reserve your Private Parties & Group Events at Mundo Tapas',
    description:
      'Celebrate private parties and group events at Mundo Tapas Bar. Perfect for birthdays, weddings, corporate gatherings, and more with flexible spaces and tailored menus.',
  },
  'wahle-uns': {
    title: 'Know Why Choose Mundo Tapas Bar - Unique Flavors & Special Events',
    description:
      'Discover why Mundo Tapas Bar is the perfect choice! Enjoy authentic cuisine, personalized menus, and flexible spaces ideal for private parties, events, and celebrations.',
  },
};

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const selectedHead = headContent[params.ourFacilities];

  return {
    title: selectedHead?.title || 'Mundo Tapas Bar | Berlin',
    description:
      selectedHead?.description ||
      'Discover the world of Mundo Tapas in Berlin with delicious Spanish cuisine, perfect spaces, and excellent service.',
    alternates: {
      canonical: `https://checkpoint-charlie.tapas-mundo.eu/${params.lang}/einrichtungen/${params.ourFacilities}`,
    },
  };
}

export default async function ServicePage(props: { params: Params }) {
  const langData = await getDictionary(props.params.lang);

  return (
    <>
      <OurServicesID
        inservice={langData.inservice}
        langData={langData.serviceList}
      />
      <ReserveTable langData={langData.reserve} />
    </>
  );
}
