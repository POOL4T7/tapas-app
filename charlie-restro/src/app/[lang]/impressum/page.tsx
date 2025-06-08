import { getDictionary } from "@/getDictionary"
import { LoadingSkeleton } from "@/layouts/Loader";
import { Metadata } from "next";
import dynamic from "next/dynamic";
const Imprint = dynamic(() => import("@/component/imprintC/page"), {
  loading: () => <LoadingSkeleton />
});

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const lang = params.lang;

  return {
    title: `Impressum – Buchen Sie Ihren Tisch in der Mundo Tapas Bar Checkpoint Charlie`,
    alternates: {
      canonical: `https://checkpoint-charlie.tapas-mundo.com/${lang}/impressum`,
    },
  };
}
  

  export default async function PolicyPage(props:any) {

    const langData=await getDictionary(props.params.lang)
  
  return (
    <div style={{paddingTop:'5rem',overflowX:'hidden'}}>
     <Imprint langData={langData.imprintData}/>

    </div>
  )
}
