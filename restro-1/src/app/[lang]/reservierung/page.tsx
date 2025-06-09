import { getDictionary } from '@/getDictionary';
import style from './style.module.css';
import { LoadingSkeleton } from '@/layouts/Loader';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { Metadata } from 'next';
const ReserveTable = dynamic(() => import('@/component/reserveTable'), {
  loading: () => <LoadingSkeleton />,
});
export const metadata: Metadata = {
  title:
    'Reservierung – Buchen Sie Ihren Tisch in der Mundo Tapas Bar in Berlin',
  alternates: {
    canonical: 'https://alt-mariendorf.tapas-mundo.euen/reservierung',
  },
  description:
    'Reservieren Sie Ihren Tisch in der Mundo Tapas Bar in Berlin für ein unvergessliches spanisches kulinarisches Erlebnis. Genießen Sie authentische Tapas-Gerichte an Ihrem bevorzugten Restaurantstandort.',
};

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
