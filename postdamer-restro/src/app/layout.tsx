import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Suspense } from 'react';
import Loading from './loading';
import { Providers } from '@/Redux/providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tapas Potsdamer Platz restaurant in Berlin',
  description:
    'Enjoy the best of Spanish cuisine at Tapas Potsdamer Platz in Berlin. Discover a variety of delicious tapas, fresh ingredients, and a vibrant atmosphere. Visit us for an unforgettable dining experience!',
  icons: {
    icon: '/public/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          <Suspense fallback={<Loading />}>
            {/* <div className="Header">
              <Link href={'/'} className="logoHeader">
                <Image src={logo} height={200} width={200} alt="logo" />
              </Link>
              <div className="sideBarOpener">
                <RightSideDrawer />
              </div>
            </div> */}

            {children}
            {/* <Footer /> */}
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
