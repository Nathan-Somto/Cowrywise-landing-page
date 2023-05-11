import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    port:'3000',
    build: {
      outDir: 'dist',
    },
    plugins: [react()],
  };
});