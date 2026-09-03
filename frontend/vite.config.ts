import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    // Docker bind mounts don't reliably emit filesystem events, so fall
    // back to polling for HMR to work inside the container.
    watch: {
      usePolling: true,
      interval: 100,
    },
    hmr: {
      clientPort: 5173,
    },
  },
})
