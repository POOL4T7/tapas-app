import { LoadingSkeleton } from '@/layouts/Loader';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
const ContactUs = dynamic(() => import("@/component/contact/contact"), {
  loading: () => <LoadingSkeleton />, ssr: false
});
const RegwithLang = dynamic(() => import("@/component/RegwithLang"), {
  ssr: false
});
export const metadata: Metadata = {
  title: "Kontakt Mundo Alt-Mariendorf | Reservierungen & Anfragen",
  alternates: {
    canonical: 'https://alt-mariendorf.tapas-mundo.com/en/kontakt',
  },
  description:
    "Kontaktieren Sie die Mundo Tapas Bar in Alt-Mariendorf für Reservierungen und Anfragen. Buchen Sie noch heute Ihren Tisch oder planen Sie Ihre besondere Veranstaltung!",
};

const Contact = () => {
  return (
    <>
      <ContactUs />
      <RegwithLang />
    </>
  );
};

export default Contact;
