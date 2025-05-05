import dynamic from 'next/dynamic';
import { getDictionary } from '@/getDictionary';
import { LoadingSkeleton } from '@/layouts/Loader';
import { Metadata } from 'next';

const OurServicesID = dynamic(() => import('@/component/facilitesID'), {
  loading: () => <LoadingSkeleton />,
  ssr: false,
});
const ReserveTable = dynamic(() => import('@/component/reserveTable'), {
  ssr: false,
});
const FacilityHead = dynamic(() => import('@/component/facilityHead'), { ssr: false });

const headContent: Record<string, { title: string; description: string }> = {
  essbereich: {
    title: 'Essbereich & Außenterrasse – Entspanntes Tapas-Erlebnis in Berlin',
    description:
      'Genießen Sie den besten Essbereich & die Außenterrasse in der Mundo Tapas Bar in Berlin. Erleben Sie authentische spanische Tapas in einem einladenden Innenbereich oder einem charmanten Außenbereich!',
  },
  'bar-mit-vollem-service': {
    title: 'Voll ausgestattete Bar – Cocktails, Weine & mehr in der Mundo Tapas Bar',
    description:
      'Genießen Sie eine erstklassige, voll ausgestattete Bar in der Mundo Tapas Bar in Berlin. Erleben Sie handgemachte Cocktails, erlesene Weine und eine große Auswahl an Getränken in lebendiger Atmosphäre!',
  },
  veranstaltungsraume: {
    title: 'Veranstaltungen in Berlin – Feiern Sie Ihre besondere Gelegenheit in der Mundo Tapas Bar',
    description:
      'Planen Sie Ihre Veranstaltung in der Mundo Tapas Bar in Berlin! Ob private Feiern oder Firmenveranstaltungen – genießen Sie authentische spanische Tapas, eine großartige Atmosphäre und individuelle Menüs.',
  },
  'private-gruppe': {
    title: 'Private Feiern & Gruppenveranstaltungen – Feiern in der Mundo Tapas Bar Berlin',
    description:
      'Feiern Sie Ihr privates Event oder Ihre Gruppenveranstaltung in der Mundo Tapas Bar in Berlin. Genießen Sie authentische spanische Gerichte mit individuell abgestimmten Menüs in lebendiger Atmosphäre!',
  },
  'wahle-uns': {
    title: 'Warum die Mundo Tapas Bar? | Authentische spanische Küche & einzigartiges Esserlebnis',
    description:
      'Erfahren Sie, warum die Mundo Tapas Bar die perfekte Wahl für Liebhaber der spanischen Küche ist. Genießen Sie authentische Aromen, maßgeschneiderte Menüs und ein unvergessliches kulinarisches Erlebnis!',
  },
  'all-you-can-eat-brunch': {
    title: 'All-you-can-eat Brunch Buffet | Unbegrenzte Aromen erleben',
    description:
      'Entdecken Sie das ultimative Brunch-Erlebnis mit unserem All-you-can-eat-Buffet. Genießen Sie eine große Auswahl an köstlichen Gerichten, frischen Zutaten und endlosen Optionen für jeden Geschmack – perfekt für jeden Anlass!',
  },
  fruhstuck: {
    title: 'Frühstück in der Mundo Tapas Bar | Frische Morgenaromen von Mo-Sa',
    description:
      'Starten Sie Ihren Tag mit einem köstlichen Frühstück in der Mundo Tapas Bar, serviert von Montag bis Samstag. Genießen Sie frische Zutaten, geschmackvolle Gerichte und ein gemütliches Ambiente für einen perfekten Morgen.',
  },
};

// ✅ Dynamic metadata for App Router
export async function generateMetadata({
  params,
}: {
  params: { ourFacilities: string; lang: string };
}): Promise<Metadata> {
  const { ourFacilities, lang } = params;
  const selectedHead = headContent[ourFacilities];

  return selectedHead
    ? {
        title: selectedHead.title,
        description: selectedHead.description,
        alternates: {
          canonical: `https://alt-mariendorf.tapas-mundo.com/${lang}/einrichtungen/${ourFacilities}`,
        },
      }
    : {
        title: 'Einrichtungen | Mundo Tapas Bar',
        description: 'Entdecken Sie unsere Einrichtungen und Services bei Mundo Tapas Bar in Berlin.',
      };
}

// ✅ Page component
export default async function ServicePage({ params }: { params: { ourFacilities: string; lang: string } }) {
  const langData = await getDictionary(params.lang);

  return (
    <>
      <OurServicesID inservice={langData.inservice} langData={langData.serviceList} />
      <ReserveTable langData={langData.reserve} />
    </>
  );
}
