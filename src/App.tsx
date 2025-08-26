import React from 'react';
import { FutureverseAuthProvider } from './components/FutureverseAuthProvider';
import MainLayout from './layout/MainLayout';

const USE_AUTH = false;

const App = () => {
  const content = <MainLayout />;

  return USE_AUTH ? (
    <FutureverseAuthProvider>{content}</FutureverseAuthProvider>
  ) : (
    content
  );
};

export default App;
