import '@/styles/globals.css';
import { Viewport } from 'next';
import clsx from 'clsx';

import { siteConfig } from '@/config/site';
import { fontSans } from '@/config/fonts';
import Script from 'next/script';
import logo from '@/public/image/logoN.webp';

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Tapas Mundo',
  url: 'https://tapas-mundo.com',
  about:
    'Tapas Mundo is an authentic Spanish Tapas restaurant offering a variety of delicious small plates and drinks in Berlin.',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Tapas Mundo',
    url: 'https://tapas-mundo.com',
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Tapas Mundo',
        item: 'https://tapas-mundo.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Tapas Mundo - Alt Mariendorf',
        item: 'https://alt-mariendorf.tapas-mundo.eu',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Tapas Mundo - Checkpoint Charlie',
        item: 'https://checkpoint-charlie.tapas-mundo.eu/',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Tapas Mundo - Potsdamer Platz',
        item: 'https://potsdamer-platz.tapas-mundo.com/',
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Our Specialties',
        item: 'https://tapas-mundo.com/#specialItem',
      },
      {
        '@type': 'ListItem',
        position: 6,
        name: 'dienstleistungen',
        item: 'https://tapas-mundo.com/en/dienstleistungen',
      },
      {
        '@type': 'ListItem',
        position: 7,
        name: 'kontakt',
        item: 'https://tapas-mundo.com/en/kontakt',
      },
    ],
  },
  mainEntity: {
    '@type': 'Organization',
    name: 'Tapas Mundo',
    url: 'https://tapas-mundo.com',
    logo: typeof logo === 'string' ? logo : logo.src,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+49-3025294284',
      contactType: 'customer service',
      areaServed: 'DE',
      availableLanguage: ['English', 'German', 'Spanish'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Alt-Mariendorf 32',
      addressLocality: 'Berlin',
      postalCode: '12107',
      addressCountry: 'DE',
    },
  },
  relatedLink: [
    'https://alt-mariendorf.tapas-mundo.eumen%C3%BCkarte-menu-card/speisekarte-a-la-carte',
    'https://alt-mariendorf.tapas-mundo.euen/reservierung',
    'https://alt-mariendorf.tapas-mundo.euen/gruppenangebot',
  ],
  datePublished: '2025-03-19',
  dateModified: '2025-03-19',
  author: {
    '@type': 'Organization',
    name: 'Tapas Mundo',
  },
};

export default async function RootLayout({ children, params }: any) {
  return (
    <html suppressHydrationWarning lang={params.lang}>
      <head>
        <meta
          name='robots'
          content='index, follow, max-image-preview:large, max-snippet:-150'
        />
        <link
          rel='alternate'
          href='https://tapas-mundo.com/es'
          hrefLang='es-ES'
        />
        <link
          rel='alternate'
          href='https://tapas-mundo.com/en'
          hrefLang='en-US'
        />
        <link rel='alternate' href='https://tapas-mundo.com/de' hrefLang='nl' />
        <meta property='og:locale' content='en_US' />
        <meta property='og:locale:alternate' content='en_US' />
        <meta property='og:locale:alternate' content='de_DE' />
        <meta property='og:locale:alternate' content='es_ES' />
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content='Beste Tapas Restaurants in Berlin: Alt-Mariendorf, Checkpoint Charlie'
        />
        <meta
          property='og:description'
          content='Entdecken Sie die besten Tapas-Restaurants in Berlin, darunter beliebte Lokale in Alt-Mariendorf, am Checkpoint Charlie und am Potsdamer Platz. Genießen Sie authentische spanische Küche!'
        />
        <meta property='og:url' content='https://tapas-mundo.com/en' />
        <meta property='og:site_name' content='Mundo Tapas' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='Beste Tapas Restaurants in Berlin: Alt-Mariendorf, Checkpoint Charlie'
        />
        <meta
          name='twitter:description'
          content='Entdecken Sie die besten Tapas-Restaurants in Berlin, darunter beliebte Lokale in Alt-Mariendorf, am Checkpoint Charlie und am Potsdamer Platz. Genießen Sie authentische spanische Küche!'
        />
        <meta name='twitter:image' content='please add cover img url' />
        <Script
          strategy='afterInteractive'
          src='https://www.googletagmanager.com/gtag/js?id=G-VRP6FF3WSZ'
        />
        <Script
          id='gtag-init'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-VRP6FF3WSZ');
            `,
          }}
        />
        <Script
          id='webPageSchema'
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        />
      </head>

      <body
        className={clsx(
          'bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <div className='bg-black'>{children}</div>
      </body>
    </html>
  );
}
