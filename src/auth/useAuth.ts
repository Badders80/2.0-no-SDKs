// src/auth/useAuth.ts
const USE_AUTH = import.meta.env.VITE_USE_AUTH === 'true';

export const useAuth = USE_AUTH
  ? async () => {
      const { useAuth: realUseAuth } = await import('../components/FutureverseAuthProvider');
      return realUseAuth();
    }
  : () => ({
      isAuthenticated: true,
      login: () => {},
      logout: () => {},
      user: { name: 'Guest' },
      userSession: { user: { name: 'Guest' } },
    });
