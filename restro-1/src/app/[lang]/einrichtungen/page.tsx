
import { getDictionary } from '@/getDictionary';
import dynamic from 'next/dynamic';
import { LoadingSkeleton } from '@/layouts/Loader';
import Head from 'next/head';
import { Metadata } from 'next';


// Lazy load BlogMain component
const ReserveTable = dynamic(() => import("@/component/reserveTable"), { ssr: false });
const OurServices = dynamic(() => import("@/component/facilites"), {
  loading: () => <LoadingSkeleton />, ssr: false
});
type Params = {
  ourFacilities: string;
  locale: string;
};
export const metadata:Metadata = {
  title: "Einrichtungen – Genießen Sie ein komfortables Esserlebnis in der Mundo Tapas Bar",
  alternates: {
    canonical: 'https://alt-mariendorf.tapas-mundo.com/en/einrichtungen',
  },
  description:
    "Entdecken Sie die Einrichtungen der Mundo Tapas Bar in Berlin. Genießen Sie eine angenehme Atmosphäre, großzügige Sitzgelegenheiten und den perfekten Rahmen für Essen, Veranstaltungen und Gruppentreffen.",
};


export default async function ServicePage(props: any) {
  const langData = await getDictionary(props.params.lang);

  return (
    <>
    
      <OurServices lang={props.params.lang} langData={langData.serviceList} />
      <ReserveTable langData={langData.reserve} />
    </>
  );
}
