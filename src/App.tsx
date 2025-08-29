import React from 'react';
import { FutureverseAuthProvider } from './components/FutureverseAuthProvider';
import MainLayout from './layout/MainLayout';
import MyStable from './pages/MyStable';
import ErrorBoundary from './components/ErrorBoundary';

// Use environment variable instead of hardcoded value
const USE_AUTH = import.meta.env.VITE_USE_AUTH === 'true';

const App = () => {
  const path = window.location.pathname.toLowerCase();
  const content = path === '/mystable' ? <MyStable /> : <MainLayout />;

  return (
    <ErrorBoundary>
      {USE_AUTH ? <FutureverseAuthProvider>{content}</FutureverseAuthProvider> : content}
    </ErrorBoundary>
  );
};

export default App;
