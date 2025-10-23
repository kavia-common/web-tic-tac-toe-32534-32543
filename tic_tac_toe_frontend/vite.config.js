import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // Port is set via script with PORT=3000; Vite respects PORT env var
    strictPort: false
  },
  preview: {
    port: 3000
  }
});
