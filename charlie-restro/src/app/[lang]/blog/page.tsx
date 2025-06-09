import { LoadingSkeleton } from '@/layouts/Loader';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

// Lazy load BlogMain component
const BlogMain = dynamic(() => import('@/component/blogResponsive'), {
  loading: () => <LoadingSkeleton />,
  ssr: false,
});

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const lang = params.lang;

  const url = `https://alt-mariendorf.tapas-mundo.eu${lang}/blog`;

  return {
    title: 'Blog - Tapas Mundo',
    description: 'Read our latest blogs and stay updated with insights.',
    alternates: {
      canonical: url,
      languages: {
        [lang]: url, // Adds <link rel="alternate" hreflang="{lang}" href="{url}" />
      },
    },
  };
}

export default function Blog() {
  return (
    <div className='mt-[8rem]'>
      <BlogMain />
    </div>
  );
}
