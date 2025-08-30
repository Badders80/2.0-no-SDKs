import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Bundle analyzer - run with ANALYZE=true npm run build
    ...(process.env.ANALYZE ? [visualizer({ filename: 'dist/stats.html', open: true })] : []),
  ],
  define: {
    global: 'globalThis',
    'process.env': {},
  },
  resolve: {
    alias: {
      buffer: 'buffer',
      '@': '/src',
    },
  },
  optimizeDeps: {
    include: ['buffer', 'react', 'react-dom'],
  },
  build: {
    target: 'esnext',
    minify: 'esbuild',
    sourcemap: false, // Set to true for debugging
    rollupOptions: {
      external: [],
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['framer-motion', 'lucide-react', 'react-icons'],
          web3: ['wagmi', 'viem', '@wagmi/connectors'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  server: {
    port: 5173,
    host: true,
  },
});
