import kumaUI from '@kuma-ui/vite';
import react from '@vitejs/plugin-react-swc';
import pages from 'vite-plugin-pages';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react(),
    pages({
      dirs: 'src/client/pages'
    }),
    kumaUI({
      wasm: true,
    }),
  ],
  server: {
    host: '0.0.0.0',
    origin: 'http://localhost:5173',
  },
  build: {
    manifest: true,
    rollupOptions: {
      input: 'src/client/index.tsx',
    },
  },
});
