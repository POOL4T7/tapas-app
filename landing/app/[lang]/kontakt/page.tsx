import dynamic from 'next/dynamic';
import { getDictionary } from '@/getDictionary';
import ContactForms from '@/components/contact/contact';
import Head from 'next/head';
import { Metadata } from 'next';

// Lazy load components
const ReserveTable = dynamic(
  () => import('@/components/reserveTable').then((mod) => mod.default),
  { loading: () => <div>Loading Reserve Table...</div> } // Optional fallback loader
);
const ContactUsInfo = dynamic(
  () =>
    import('@/section/contactUsLayouts/info').then((mod) => mod.ContactUsInfo),
  { loading: () => <div>Loading Contact Information...</div> }
);
const OurAddress = dynamic(
  () =>
    import('@/section/contactUsLayouts/AddressLayout/page').then(
      (mod) => mod.default
    ),
  { loading: () => <div>Loading Address...</div> }
);

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const lang = params.lang;

  return {
    title: 'Kontakt - Buchen Sie einen Tisch bei Mundo Tapas Bar in Berlin',
    alternates: {
      canonical: `https://tapas-mundo.com/${lang}/kontakt`,
    },
  };
}

export default async function ContactPage(props: any) {
  const langData = await getDictionary(props.params.lang);

  return (
    <>
      <div>
        <ContactUsInfo langData={langData.meetUs} />
        <OurAddress langData={langData.address} />
        <ContactForms />
        <ReserveTable langData={langData.reserve} />
      </div>
    </>
  );
}
