import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({ filename: 'stats.html', open: true, gzipSize: true, brotliSize: true }),
  ],
  define: {
    global: 'globalThis',
    'process.env': {},
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      buffer: 'buffer',
    },
  },
  optimizeDeps: {
    include: ['buffer'],
  },
  build: {
    rollupOptions: {
      external: [],
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'wagmi-viem': ['wagmi', 'viem'],
          'framer-motion': ['framer-motion'],
          'ui-libs': ['lucide-react', 'react-icons'],
        },
      },
    },
    // Increase chunk size warning limit after optimization
    chunkSizeWarningLimit: 1000,
  },
});
