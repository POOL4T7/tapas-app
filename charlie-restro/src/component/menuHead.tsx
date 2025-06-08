import Head from 'next/head';

const CheckpointCharlieMenuHead = ({ path }: { path: string[] }) => {
  const lastSegment = path.at(-1);

  const headContent: Record<string, { title: string; description: string }> = {
    'getr%C3%A4nkekarte-drinks-menu': {
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

  const selectedHead = headContent[lastSegment || ''] || defaultHead;

  return (
    <Head>
      <title>{selectedHead.title}</title>
      <meta name="description" content={selectedHead.description} />
    </Head>
  );
};

export default CheckpointCharlieMenuHead;
