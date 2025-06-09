import { getDictionary } from '@/getDictionary';
import { Metadata } from 'next';
import { i18n } from '@/i18n-config';
import dynamic from 'next/dynamic';
import { LoadingSkeleton } from '@/layouts/Loader';

// Lazy load BlogMain component
const ReserveTable = dynamic(() => import('@/component/reserveTable'), {
  ssr: false,
});
const OurServices = dynamic(() => import('@/component/facilites'), {
  loading: () => <LoadingSkeleton />,
  ssr: false,
});

type Params = {
  ourFacilities: string;
  locale: string;
};

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const lang = params.lang;

  const url = `https://checkpoint-charlie.tapas-mundo.eu/${lang}/einrichtungen`;

  return {
    title:
      'Einrichtungen – Genießen Sie ein komfortables Esserlebnis in der Mundo Tapas Bar',
    description:
      'Entdecken Sie die Einrichtungen der Mundo Tapas Bar in Berlin. Genießen Sie eine angenehme Atmosphäre, großzügige Sitzgelegenheiten und den perfekten Rahmen für Essen, Veranstaltungen und Gruppentreffen.',
    alternates: {
      canonical: url,
      languages: {
        [lang]: url, // Dynamically adds hreflang="{lang}" with the correct URL
      },
    },
  };
}

export default async function ServicePage(props: any) {
  const langData = await getDictionary(props.params.lang);

  return (
    <>
      <OurServices lang={props.params.lang} langData={langData.serviceList} />
      <ReserveTable langData={langData.reserve} />
    </>
  );
}
