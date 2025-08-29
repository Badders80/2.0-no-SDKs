import React, { Suspense, lazy } from 'react';
import { FutureverseAuthProvider } from './components/FutureverseAuthProvider';
import MainLayout from './layout/MainLayout';
import ErrorBoundary from './components/ErrorBoundary';
import PageLoader from './components/PageLoader';

// Lazy load heavy components
const MyStable = lazy(() => import('./pages/MyStable'));

// Use environment variable instead of hardcoded value
const USE_AUTH = import.meta.env.VITE_USE_AUTH === 'true';

const App = () => {
  const path = window.location.pathname.toLowerCase();
  const content =
    path === '/mystable' ? (
      <Suspense fallback={<PageLoader />}>
        <MyStable />
      </Suspense>
    ) : (
      <MainLayout />
    );

  return (
    <ErrorBoundary>
      {USE_AUTH ? <FutureverseAuthProvider>{content}</FutureverseAuthProvider> : content}
    </ErrorBoundary>
  );
};

export default App;
