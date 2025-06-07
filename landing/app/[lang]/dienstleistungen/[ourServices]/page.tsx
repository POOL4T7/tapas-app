import dynamic from 'next/dynamic';
import { getDictionary } from '@/getDictionary';
import Head from 'next/head';
import { Metadata } from 'next';


// Lazy load components
const ReserveTable = dynamic(() =>
  import('@/components/reserveTable').then((mod) => mod.default),
  { loading: () => <div>Loading Reserve Table...</div> } // Optional fallback loader
);

const OurServicesID = dynamic(() =>
  import('@/components/servicesID').then((mod) => mod.default),
  { loading: () => <div>Loading Services...</div> } // Optional fallback loader
);

type Params = {
  ourServices: string;
  locale: string;
};

export async function generateMetadata({
  params,
}: {
  params: { lang: string; ourServices: string };
}): Promise<Metadata> {
  const { lang, ourServices } = params;

  return {
    title: 'Unsere Dienstleistungen - Mundo Tapas Bar in Alt Mariendorf, Checkpoint Charlie',
    description:
      'Entdecken Sie die Dienstleistungen der Mundo Tapas Bar in Alt-Mariendorf und Checkpoint Charlie. Genießen Sie authentische spanische Tapas, feine Weine, Catering und eine warme Atmosphäre!',
    alternates: {
      canonical: `https://tapas-mundo.com/${lang}/dienstleistungen/${ourServices}`,
    },
  };
}

export default async function ServicePage(props: any) {
  const langData = await getDictionary(props.params.lang);

  return (
    <>
   
      <OurServicesID inservice={langData.inservice} langData={langData.serviceList} />
      <ReserveTable langData={langData.reserve} />
    </>
  );
}
