import React from 'react';
import { FutureverseAuthProvider } from './components/FutureverseAuthProvider';
import MainLayout from './layout/MainLayout';
import MyStable from './pages/MyStable';

// Use environment variable instead of hardcoded value
const USE_AUTH = import.meta.env.VITE_USE_AUTH === 'true';

const App = () => {
  const path = window.location.pathname.toLowerCase();
  const content = path === '/mystable' ? <MyStable /> : <MainLayout />;

  return USE_AUTH ? (
    <FutureverseAuthProvider>{content}</FutureverseAuthProvider>
  ) : (
    content
  );
};

export default App;