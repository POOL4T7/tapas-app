import dynamic from 'next/dynamic';
import '@/styles/globals.css';
import { Viewport } from 'next';
import { Providers } from './providers';
import { siteConfig } from '@/config/site';
import Template from './template';
import { getDictionary } from '@/getDictionary';

// Lazy load components
const Header = dynamic(() =>
  import('@/components/header').then((mod) => mod.default),
  { loading: () => <div>Loading Header...</div> } // Optional fallback loader
);

const Footer = dynamic(() =>
  import('@/components/footer').then((mod) => mod.default),
  { loading: () => <div>Loading Footer...</div> } // Optional fallback loader
);

const CookieConsent = dynamic(() =>
  import('@/components/cookie/cokkieConstant').then((mod) => mod.default),
  { loading: () => <div>Loading Cookie Consent...</div> } // Optional fallback loader
);


export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default async function RootLayout({ children, params }: any) {
  const langData = await getDictionary(params.lang);

  return (
    <>
      <Providers themeProps={{ attribute: 'class', defaultTheme: 'light' }}>
        <Header text={langData.textus} lang={params.lang} langData={langData} />
        <Template>{children}</Template>
        <Footer lang={params.lang} langData={langData.footer} />
        <CookieConsent data={langData.cookie}/>
      </Providers>
    </>
  );
}
