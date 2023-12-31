import { defineConfig } from 'vite';
import { resolve } from 'path'
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        port: 5000,
        host: '0.0.0.0'
    },
    resolve: {
      alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
    },
});
