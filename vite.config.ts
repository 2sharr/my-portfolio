import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: 'localhost', // Ensures it listens on localhost
    port: 5173, // Default port, can change if needed
    strictPort: true, // Prevents Vite from picking another port if 5173 is in use
  },
  base: '/my-portfolio/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    copyPublicDir: true
  }
});
