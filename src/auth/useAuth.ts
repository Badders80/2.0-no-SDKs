// src/auth/useAuth.ts
const USE_AUTH = import.meta.env.VITE_USE_AUTH === 'true';

export const useAuth = USE_AUTH
  ? require('../components/FutureverseAuthProvider').useAuth
  : () => ({
      isAuthenticated: true,
      login: () => {},
      logout: () => {},
      user: { name: 'Guest' },
      userSession: { user: { name: 'Guest' } },
    });
