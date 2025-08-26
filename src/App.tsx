import React from 'react';
import Home from './pages/Home';
import MyStable from './pages/MyStable';
import { FutureverseAuthProvider } from './components/FutureverseAuthProvider';
const USE_AUTH = import.meta.env.VITE_USE_AUTH === 'true';

/**
 * Simple router based on pathname. When visiting `/mystable` the
 * MyStable dashboard is rendered, otherwise the landing page.
 * Now wrapped with Futureverse auth providers.
 */
export default function App() {
  const path = window.location.pathname.toLowerCase();
  
  return (
    <>
      {/* <PrivyProvider clientId="..."> */}
      <MainLayout />
      {/* </PrivyProvider> */}
    </>
  );
  const app = <MainLayout />;
  return USE_AUTH ? (
    <FutureverseAuthProvider clientId={import.meta.env.VITE_CLIENT_ID} redirectUri={import.meta.env.VITE_REDIRECT_URI}>
      {app}
    </FutureverseAuthProvider>
  ) : (
    app
  );
}
