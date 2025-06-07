import dynamic from 'next/dynamic';
import { getDictionary } from '@/getDictionary';
import { Metadata } from 'next';

// Lazy load the PrivacyPolicy component
const PrivacyPolicy = dynamic(() =>
  import('@/components/privacyPolicy/privacyPolicy').then((mod) => mod.default),
  { loading: () => <div>Loading Privacy Policy...</div> } // Optional fallback loader
);

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const lang = params.lang;

  return {
    title: 'Datenschutzrichtlinie - Mundo Tapas Bar in Alt Mariendorf, Checkpoint Charlie',
    description:
      'Entdecken Sie die datenschutzrichtlinie der Mundo Tapas Bar in Alt-Mariendorf und Checkpoint Charlie.',
    alternates: {
      canonical: `https://tapas-mundo.com/${lang}/datenschutzrichtlinie`,
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
      <PrivacyPolicy langData={langData.privacyNew} />
    </div>
  );
}
