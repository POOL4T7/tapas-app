import { getDictionary } from '@/getDictionary';
import style from './style.module.css';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { LoadingSkeleton } from '@/layouts/Loader';
const ReserveTable = dynamic(() => import('@/component/reserveTable'), {
  loading: () => <LoadingSkeleton />,
});

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const lang = params.lang;

  const url = `https://checkpoint-charlie.tapas-mundo.eu/${lang}/reservierung`;

  return {
    title: 'Reservation - Book Your Table at Mundo Checkpoint Charlie Berlin',
    description:
      'Secure your table at Tapas Mundo Checkpoint Charlie in Berlin. Make a reservation for an unforgettable experience with authentic Spanish flavors and traditional dishes.',
    alternates: {
      canonical: url,
      languages: {
        [lang]: url, // This adds <link rel="alternate" hreflang="{lang}" href="{url}" />
      },
    },
  };
}
const Reservation = async (props: any) => {
  const langData = await getDictionary(props.params.lang);

  return (
    <>
      <div className={style.background}>
        <div className={style.bgBack}>
          <div className='bg-dark pt-20 pb-20'>
            <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='  bg-opacity-60 rounded-lg p-6 text-center'>
                <h1 className='text-3xl sm:text-4xl font-bold text-gray-100 mb-4'>
                  Reservierung
                </h1>
                {/* <p className="text-sm sm:text-lg text-gray-200"></p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ReserveTable langData={langData.reserve} />
    </>
  );
};

export default Reservation;
