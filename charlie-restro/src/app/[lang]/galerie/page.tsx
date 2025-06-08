import ComingSoon from "@/component/commingSoon"
import GalleryLayout from "@/component/galleryLayout"
import RegwithLang from "@/component/RegwithLang"
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const lang = params.lang;

  const url = `https://checkpoint-charlie.tapas-mundo.com/${lang}/galerie`;

  return {
    title: 'Galerie – Ein Blick in die Mundo Tapas Bar am Checkpoint Charlie',
    description:
      'Werfen Sie einen Blick in unsere Galerie und entdecken Sie die einzigartige Atmosphäre der Mundo Tapas Bar in Berlin – von stilvollen Innenräumen bis zu köstlichen Tapas-Momenten.',
    alternates: {
      canonical: url,
      languages: {
        [lang]: url,
      },
    },
  };
}
const Gallery = ()=>{
    return <div className="bg-[#121f25]"> <GalleryLayout /><RegwithLang/></div>
}

export default Gallery