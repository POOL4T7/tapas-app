import dynamic from 'next/dynamic';
import { Metadata } from 'next';

const ClientMenuCards = dynamic(() => import('@/component/menuMain/page'), {
  ssr: false,
});

const headContent: Record<string, { title: string; description: string }> = {
  'getränkekarte-drinks-menu': {
    title:
      'Menükarte - Genießen Sie unsere Getränkekarte im Mundo Bar Restaurant',
    description:
      'Entdecken Sie unsere Getränkekarte im Mundo Bar Restaurant. Genießen Sie eine Auswahl an feinen Weinen, Cocktails, exklusiven Longdrinks und erfrischenden Getränken, die Ihr Tapas-Erlebnis perfekt ergänzen!',
  },
  'speisekarte-a-la-carte': {
    title:
      'Menü à la carte - Erleben Sie authentische Aromen in der Mundo Tapas Bar',
    description:
      'Entdecken Sie das à la carte Menü der Mundo Tapas Bar in Berlin. Genießen Sie authentische spanische Tapas, frische Zutaten und reichhaltige Aromen für ein wahres mediterranes Erlebnis!',
  },
  'brunch-buffet': {
    title:
      'Brunch Buffet in Berlin – Köstlicher Spanischer Brunch in der Mundo Tapas Bar',
    description:
      'Finden Sie ein köstliches Brunch-Buffet in der Mundo Tapas Bar in Berlin. Genießen Sie authentische spanische Aromen, frische Zutaten und ein einladendes kulinarisches Erlebnis. Reservieren Sie jetzt Ihren Tisch!',
  },
  'frühstucksmenü-breakfast-menu': {
    title:
      'Frühstücksmenü in Berlin – Beginnen Sie Ihren Tag in der Mundo Tapas Bar',
    description:
      'Entdecken Sie das Frühstücksmenü der Mundo Tapas Bar in Berlin. Genießen Sie eine köstliche Auswahl an spanisch inspirierten Frühstücksgerichten, frischen Zutaten und gemütlichem Morgenambiente!',
  },
};

const defaultHead = {
  title: 'Explore Our Menu | Tapas Mundo',
  description:
    'Discover a variety of Spanish and Latin American dishes at Tapas Mundo. Explore our menu for an unforgettable dining experience.',
};

// ✅ Required to make metadata dynamic
export async function generateMetadata({
  params,
}: {
  params: { menuItem: string[] };
}): Promise<Metadata> {
  const lastSegment = params.menuItem?.at(-1) ?? 'speisekarte-a-la-carte';
  const selectedHead = headContent[lastSegment] || defaultHead;

  return {
    title: selectedHead.title,
    description: selectedHead.description,
    alternates: {
      canonical: `https://alt-mariendorf.tapas-mundo.eumenükarte-menu-card/${lastSegment}`,
    },
  };
}

export default function MenuPage({
  params,
}: {
  params: { menuItem: string[] };
}) {
  return <ClientMenuCards />;
}
