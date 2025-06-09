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

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const { lang } = params;

  return {
    title: `Datenschutzrichtlinie – Buchen Sie Ihren Tisch in der Mundo Tapas Bar Checkpoint Charlie`,
    alternates: {
      canonical: `https://checkpoint-charlie.tapas-mundo.eu/${lang}/datenschutzrichtlinie`,
    },
  };
}
export default async function PolicyPage(props: any) {
  const langData = await getDictionary(props.params.lang);

  return (
    <div style={{ paddingTop: '5rem', overflowX: 'hidden' }}>
      <PrivacyPolicy langData={langData.privacyNew} />
    </div>
  );
}
