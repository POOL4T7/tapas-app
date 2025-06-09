import { LoadingSkeleton } from '@/layouts/Loader';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
const ContactUs = dynamic(() => import('@/component/contact/contact'), {
  loading: () => <LoadingSkeleton />,
  ssr: false,
});
const RegwithLang = dynamic(() => import('@/component/RegwithLang'), {
  ssr: false,
});

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const lang = params.lang;

  const url = `https://checkpoint-charlie.tapas-mundo.eu/${lang}/kontakt`;

  return {
    title: `Reservierung – Buchen Sie Ihren Tisch in der Mundo Tapas Bar Checkpoint Charlie`,
    description:
      'Sichern Sie sich Ihren Tisch in der Mundo Tapas Bar Checkpoint Charlie in Berlin. Reservieren Sie jetzt für ein unvergessliches Erlebnis mit authentischen spanischen Aromen und traditionellen Gerichten.',
    alternates: {
      canonical: url,
      languages: {
        [lang]: url, // Adds dynamic hreflang
      },
    },
  };
}

const Contact = () => {
  return (
    <div>
      <ContactUs />
      <RegwithLang />
    </div>
  );
};

export default Contact;
