import React from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { LoadingSkeleton } from '@/layouts/Loader';

// Lazy load BlogMain component
const GroupOffer = dynamic(() => import("./GroupOffer"), {
  loading: () => <LoadingSkeleton />, ssr: false 
});

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const lang = params.lang;

  const url = `https://checkpoint-charlie.tapas-mundo.com/${lang}/gruppenangebot`;

  return {
    title:
      'Gruppenangebote – Exklusive Angebote für Partys in der Mundo Tapas Bar Checkpoint Charlie',
    description:
      'Feiern Sie Ihre Gruppenveranstaltung in der Mundo Tapas Bar Checkpoint Charlie in Berlin! Genießen Sie exklusive Angebote für Partys mit 20+ Gästen, begleitet von köstlichen spanischen Tapas und einem einladenden Ambiente.',
    alternates: {
      canonical: url,
      languages: {
        [lang]: url, // This dynamically sets hreflang="{lang}" for the current page
      },
    },
  };
}

const page = () => {
  return (
    <>
      <GroupOffer />
    </>
  );
};

export default page;
