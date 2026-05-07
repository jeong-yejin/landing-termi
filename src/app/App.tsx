import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const LandingPage = lazy(() => import('@/features/landing/LandingPage'));
const ReboundXV2Page = lazy(() => import('@/features/reboundx-v2/ReboundXV2Page'));

function RouteFallback() {
  return <div className="route-fallback" aria-label="Loading page" />;
}

export default function App() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route path="/" element={<Navigate to="/reboundx" replace />} />
        <Route path="/reboundx" element={<LandingPage />} />
        <Route path="/reboundx-v2" element={<ReboundXV2Page />} />
        <Route path="*" element={<Navigate to="/reboundx" replace />} />
      </Routes>
    </Suspense>
  );
}
