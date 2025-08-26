import React from 'react';

// Flag to toggle auth globally
const USE_AUTH = false;

export const FutureverseAuthProvider = ({ children }: { children: React.ReactNode }) => {
  if (!USE_AUTH) return <>{children}</>;
  // When re-enabling, wrap Futureverse SDK here:
  // return <ActualFutureverseProvider clientId="..." redirectUri="...">{children}</ActualFutureverseProvider>;
  return <>{children}</>;
};
