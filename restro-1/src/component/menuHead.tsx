import Head from 'next/head';

const MenuHead = ({ path }: { path: string[] }) => {
  const lastSegment = path.at(-1);

  const headContent: Record<string, { title: string; description: string }> = {
    'getr%C3%A4nkekarte-drinks-menu': {
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
    'fr%C3%BChstucksmen%C3%BC-breakfast-menu': {
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

  const selectedHead = headContent[lastSegment || ''] || defaultHead;
  const canonicalUrl = `https://alt-mariendorf.tapas-mundo.eumen%C3%BCkarte-menu-card/${encodeURIComponent(
    lastSegment || 'speisekarte-a-la-carte'
  )}`;
  return (
    <Head>
      <title>{selectedHead.title}</title>
      <meta name='description' content={selectedHead.description} />
      <link rel='canonical' href={canonicalUrl} />
    </Head>
  );
};

export default MenuHead;
