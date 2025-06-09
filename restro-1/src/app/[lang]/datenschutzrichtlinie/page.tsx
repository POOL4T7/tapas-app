import { getDictionary } from '@/getDictionary';
import { LoadingSkeleton } from '@/layouts/Loader';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
// Lazy load BlogMain component
const PrivacyPolicy = dynamic(
  () => import('@/component/privacyPolicy/privacyPolicy'),
  {
    loading: () => <LoadingSkeleton />,
    ssr: false,
  }
);
export const metadata: Metadata = {
  title:
    'Datenschutzrichtlinie Mundo Alt-Mariendorf | Reservierungen & Anfragen',
  alternates: {
    canonical: 'https://alt-mariendorf.tapas-mundo.euen/datenschutzrichtlinie',
  },
  description:
    'Datenschutzrichtlinie Sie die Mundo Tapas Bar in Alt-Mariendorf für Reservierungen und Anfragen. ',
};
export default async function PolicyPage(props: any) {
  const langData = await getDictionary(props.params.lang);

  return (
    <div style={{ paddingTop: '5rem', overflowX: 'hidden' }}>
      <PrivacyPolicy langData={langData.privacyNew} />
    </div>
  );
}
