import React from 'react';
import { FutureverseAuthProvider } from './components/FutureverseAuthProvider';
import MainLayout from './layout/MainLayout';
import MyStable from './pages/MyStable';

const USE_AUTH = false;

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
