import dynamic from 'next/dynamic';
import { Metadata } from 'next';

const ClientMenuCards = dynamic(() => import('@/component/menuHead/page'), {
  ssr: false,
});

const headContent: Record<string, { title: string; description: string }> = {
  'getränkekarte-drinks-menu': {
    title: 'Menükarte – Unsere Getränkekarte im Restaurant Checkpoint Charlie',
    description:
      'Entdecken Sie die Getränkekarte in der Mundo Tapas Bar nahe Checkpoint Charlie. Genießen Sie erfrischende Cocktails, erlesene Weine und spanisch inspirierte Getränke in lebendiger Atmosphäre!',
  },
  'speisekarte-a-la-carte': {
    title: 'À-la-Carte-Menü – Spanische Küche in der Mundo Tapas Bar Checkpoint Charlie',
    description:
      'Entdecken Sie das authentische À-la-Carte-Menü der Mundo Tapas Bar in Berlin. Genießen Sie eine Vielfalt an frischen & geschmackvollen spanischen Gerichten für ein echtes mediterranes Erlebnis!',
  },
};

const defaultHead = {
  title: 'Mundo Tapas Bar – Spanische Küche & Cocktails in Berlin',
  description:
    'Genießen Sie spanische Tapas und Getränke in der Mundo Tapas Bar nahe Checkpoint Charlie. Authentische Küche und lebendige Atmosphäre erwarten Sie!',
};

export async function generateMetadata({
  params,
}: {
  params: { lang: string; menuItem: string };
}): Promise<Metadata> {
  const { lang, menuItem } = params;
  const lastSegment = decodeURIComponent(menuItem) ?? '';
  const selectedHead = headContent[lastSegment] || defaultHead;

  const url = `https://checkpoint-charlie.tapas-mundo.com/${lang}/menü-karte-menu-card/${lastSegment}`;

  return {
    title: selectedHead.title,
    description: selectedHead.description,
    alternates: {
      canonical: url,
      languages: {
        [lang]: url, // This adds hreflang="${lang}" with the correct URL
      },
    },
  };
}

export default function MenuPage({ params }: { params: { menuItem: string[] } }) {
  return <ClientMenuCards />;
}
