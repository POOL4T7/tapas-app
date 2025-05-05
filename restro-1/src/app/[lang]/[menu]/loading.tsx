import { Suspense, lazy } from 'react';

// Lazy load the LoadingSkeleton component
const LoadingSkeleton = lazy(() => import('@/layouts/Loader').then((mod) => ({ default: mod.LoadingSkeleton })));

export default function Loading() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <LoadingSkeleton />
    </Suspense>
  );
}
