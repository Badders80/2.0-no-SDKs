// src/auth/useAuth.ts
import React from 'react';

const USE_AUTH = import.meta.env.VITE_USE_AUTH === 'true';

export const useAuth = () => {
  return React.useMemo(
    () => ({
      isAuthenticated: true,
      login: () => {},
      logout: () => {},
      user: { name: 'Guest', profile: { email: 'guest@example.com' } },
      userSession: {
        user: { name: 'Guest', profile: { email: 'guest@example.com' } },
        eoa: '0x1234567890123456789012345678901234567890' as `0x${string}`,
      },
    }),
    []
  );
};
