import { Suspense } from "react";
import { LoadingSkeleton } from "@/layouts/Loader";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
      <Suspense fallback={<p>Loading...</p>}>
      <LoadingSkeleton />
    </Suspense>
    )
  }