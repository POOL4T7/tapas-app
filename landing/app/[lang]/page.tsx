import dynamic from 'next/dynamic';
import { getDictionary } from '@/getDictionary';
import { Metadata } from 'next';
import MundoIntro from '@/components/homePageContent/homePageContent';

const Carousel = dynamic(() => import('@/components/crousel'), {
  loading: () => <div>Loading Carousel...</div>,
});
const CardSection = dynamic(() => import('@/section/cardSection'), {
  loading: () => <div>Loading Cards...</div>,
});
const OurServiceLanding = dynamic(() => import('@/section/ourServiceSection'), {
  loading: () => <div>Loading Services...</div>,
});
const DishSection = dynamic(() => import('@/section/DishSection'), {
  loading: () => <div>Loading Dishes...</div>,
});
const ReserveTable = dynamic(() => import('@/components/reserveTable'), {
  loading: () => <div>Loading Reserve Table...</div>,
});
const SpecialDish = dynamic(() => import('@/components/specialDish'), {
  loading: () => <div>Loading Special Dish...</div>,
});

export const metadata: Metadata = {
  title:
    'Beste Mundo Tapas-Bar und Restaurants in Berlin: Alt-Mariendorf, Checkpoint Charlie',
  description:
    'Entdecken Sie die besten Tapas-Bars und Restaurants Berlins, von Alt-Mariendorf bis Checkpoint Charlie. Genießen Sie authentische spanische Tapas, köstliche kleine Gerichte und ein lebendiges Ambiente!',
};
export default async function Home(props: any) {
  const langData = await getDictionary(props.params.lang);
  if (!langData) {
    return (
      <>
        <main>
          <span>Error: Unable to load data.</span>
        </main>
      </>
    );
  }

  return (
    <>
      <head>
        <meta
          name='google-site-verification'
          content='dCfEWwIeSKjORIHeIRjOEg_MIKkAoUoytzoHCuj3VgI'
        />
        <link
          rel='canonical'
          href={`https://tapas-mundo.com/${props.params.lang}`}
        />
      </head>
      {/* <Carousel langData={langData.crousel} /> */}
      <CardSection langData={langData.address} />
      <MundoIntro content={langData.mainH} />
      <OurServiceLanding
        lang={props.params.lang}
        langData={langData.services}
      />
      <ReserveTable langData={langData.reserve} />
      <DishSection lang={props.params.lang} langData={langData.dish} />
      <SpecialDish langData={langData.allDishes} />
      <ReserveTable langData={langData.reserve} />
    </>
  );
}
