import dynamic from 'next/dynamic';
import { getDictionary } from '@/getDictionary';
import Head from 'next/head';
import { Metadata } from 'next';

// Lazy load components with fallback loaders
const ReserveTable = dynamic(
  () => import('@/components/reserveTable').then((mod) => mod.default),
  { loading: () => <div>Loading Reserve Table...</div> }
);

const InfoContact = dynamic(
  () => import('@/section/AboutusLayouts/info').then((mod) => mod.InfoContact),
  { loading: () => <div>Loading Contact Info...</div> }
);

const ContactDetails = dynamic(
  () =>
    import('@/section/AboutusLayouts/details').then(
      (mod) => mod.ContactDetails
    ),
  { loading: () => <div>Loading Contact Details...</div> }
);

const OurPolicy = dynamic(
  () =>
    import('@/section/AboutusLayouts/policies').then((mod) => mod.OurPolicy),
  { loading: () => <div>Loading Policies...</div> }
);
export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const lang = params.lang;

  return {
    title: 'Über uns - Top bewertete Mundo Tapas Restaurants in Berlin',
    description:
      'Finden Sie die Mundo Tapas Bar, eines der besten Restaurants in Berlin. Erfahren Sie mehr über unsere Leidenschaft für authentische spanische Aromen und außergewöhnliche kulinarische Erlebnisse!',
    alternates: {
      canonical: `https://tapas-mundo.com/${lang}/uberuns`,
    },
  };
}
export default async function AboutPage(props: any) {
  const langData = await getDictionary(props.params.lang);

  return (
    <>

      <div>
        <InfoContact langData={langData.InfoContact} />
        <ContactDetails langData={langData.aboutSection} />
        <OurPolicy langData={langData.policy} />
        <div className='my-4'>
          <ReserveTable langData={langData.reserve} />
        </div>
      </div>
    </>
  );
}
