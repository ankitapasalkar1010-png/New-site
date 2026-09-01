import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0', // Exposes the server on the local network (LAN)
    port: 5173,
    strictPort: true,
  },
});
