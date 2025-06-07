import dynamic from 'next/dynamic';
import { getDictionary } from '@/getDictionary';
import { Metadata } from 'next';
const Imprint = dynamic(() =>
  import('@/components/imprintC/page').then((mod) => mod.default),
  { loading: () => <div>Loading Imprint...</div> }
);
export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const lang = params.lang;

  return {
    title: 'Impressum - Mundo Tapas Bar in Alt Mariendorf, Checkpoint Charlie',
    description: 'Entdecken Sie die Impressum der Mundo Tapas Bar in Alt-Mariendorf und Checkpoint Charlie.',
    alternates: {
      canonical: `https://tapas-mundo.com/${lang}/impressum`,
    },
  };
}
export default async function PolicyPage(props: any) {
  const langData = await getDictionary(props.params.lang);

  return (
    <div
      style={{
        paddingTop: '5rem',
        overflowX: 'hidden',
        background: 'rgba(0,0,0)',
      }}
    >
      <Imprint langData={langData.imprintData} />
    </div>
  );
}
