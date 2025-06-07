import Header from '@/components/header';
import { getDictionary } from '@/getDictionary';
import Link from 'next/link';

export default async function NotFound({}) {
  const langData = await getDictionary('en');

  return (
    <>
      <Header text={langData.textus} lang={'en'} langData={langData} />
      <div className='flex flex-col items-center justify-center h-screen '>
        <div className='text-center'>
          <h1 className='text-8xl font-extrabold text-white'>404</h1>
          <h2 className='text-2xl font-semibold text-white mt-4'>
            Page Not Found
          </h2>
          <p className='text-white mt-2'>
            Sorry, the page you are looking for doesnt exist or has been moved.
          </p>
          <Link
            href='/'
            className='mt-6 inline-block bg-yellow-600 text-white font-medium px-6 py-3 rounded-md hover:bg-yellow-700 transition'
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </>
  );
}
