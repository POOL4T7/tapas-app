import { getDictionary } from '@/getDictionary';
import { LoadingSkeleton } from '@/layouts/Loader';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
const Imprint = dynamic(() => import('@/component/imprintC/page'), {
  loading: () => <LoadingSkeleton />,
});

export const metadata: Metadata = {
  title: 'Impressum Mundo Alt-Mariendorf | Reservierungen & Anfragen',
  alternates: {
    canonical: 'https://alt-mariendorf.tapas-mundo.euen/impressum',
  },
  description:
    'Impressum Sie die Mundo Tapas Bar in Alt-Mariendorf für Reservierungen und Anfragen. ',
};

export default async function PolicyPage(props: any) {
  const langData = await getDictionary(props.params.lang);

  return (
    <div style={{ paddingTop: '5rem', overflowX: 'hidden' }}>
      <Imprint langData={langData.imprintData} />
    </div>
  );
}
