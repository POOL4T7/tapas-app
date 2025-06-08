import Head from 'next/head';


const FacilityHead = ({ params }: { params: { ourFacilities: string } }) => {
    const headContent: Record<string, { title: string; description: string }> = {
    'essbereich': {
      title: 'Dining Area & Outdoor Patio – Enjoy Tapas Indoors & Outdoors in Berlin',
      description:
        'Enjoy a comfortable dining experience at Mundo Tapas Bar in Berlin. Choose between our stylish indoor seating or the refreshing outdoor patio for your perfect meal.',
    },
    'bar-mit-vollem-service': {
      title: 'Full-Service Bar – Cocktails, Wines & More at Mundo Tapas Bar Berlin',
      description:
        'Unwind at Mundo Tapas Bar’s full-service bar in Berlin. From handcrafted cocktails to fine wines, enjoy expertly mixed drinks in a lively and welcoming setting!',
    },
    'veranstaltungsraume': {
      title: 'Events - Celebrate at Mundo Tapas Bar with Flexible Spaces',
      description:
        'Planning a special event? From birthdays and weddings to baby showers and corporate dinners, Mundo Tapas Bar offers versatile spaces for any celebration. Get an unforgettable experience for guests of all sizes.',
    },
    'private-gruppe': {
      title: 'Reserve your Private Parties & Group Events at Mundo Tapas',
      description:
        'Celebrate private parties and group events at Mundo Tapas Bar. Perfect for birthdays, weddings, corporate gatherings, and more with flexible spaces and tailored menus.',
    },
    'wahle-uns': {
      title: 'Know Why Choose Mundo Tapas Bar - Unique Flavors & Special Events',
      description:
        'Discover why Mundo Tapas Bar is the perfect choice! Enjoy authentic cuisine, personalized menus, and flexible spaces ideal for private parties, events, and celebrations.',
    },
  };

  const selectedHead = headContent[params.ourFacilities];

  return selectedHead ? (
    <Head>
      <title>{selectedHead.title}</title>
      <meta name="description" content={selectedHead.description} />
    </Head>
  ) : null;
};
export default FacilityHead;