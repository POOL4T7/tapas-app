import React from 'react';
import dynamic from 'next/dynamic';
import { LoadingSkeleton } from '@/layouts/Loader';
import Head from 'next/head';
import { Metadata } from 'next';

// Lazy load BlogMain component
const GroupOffer = dynamic(() => import('./GroupOffer'), {
  loading: () => <LoadingSkeleton />,
  ssr: false,
});
export const metadata: Metadata = {
  title:
    'Gruppenangebote – Besondere Angebote für Gruppen in der Mundo Tapas Bar Berlin',
  alternates: {
    canonical: 'https://alt-mariendorf.tapas-mundo.euen/gruppenangebot',
  },
  description:
    'Erhalten Sie exklusive Gruppenangebote in der Mundo Tapas Bar in Berlin und maßgeschneiderte Menüs für Ihre privaten Events. Finden Sie köstliche Tapas-Angebote für Partys mit 20 oder mehr Gästen.',
};

const page = () => {
  return (
    <>
      <GroupOffer />
    </>
  );
};

export default page;
