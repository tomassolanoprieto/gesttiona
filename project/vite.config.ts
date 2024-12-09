import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  publicDir: 'public',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        admin: path.resolve(__dirname, 'public/admin/index.html'),
      },
      output: {
        manualChunks: {
          'decap-cms': ['decap-cms-app', 'decap-cms-locales'],
        },
      },
    },
  },
  server: {
    fs: {
      allow: ['.'],
    },
  },
});