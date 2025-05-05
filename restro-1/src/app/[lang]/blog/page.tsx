import { LoadingSkeleton } from "@/layouts/Loader";
import { Metadata } from "next";
import dynamic from "next/dynamic";

// Lazy load BlogMain component
const BlogMain = dynamic(() => import("@/component/blogResponsive"), {
  loading: () => <LoadingSkeleton />,ssr:false
});
export const metadata: Metadata = {
  title: "Blog - Tapas Mundo",
  description: "Read our latest blogs and stay updated with insights.",
};

export default function Blog() {
  return (
    <div className="mt-[8rem]">
      <BlogMain />  
    </div>
  );
}
