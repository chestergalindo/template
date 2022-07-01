import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import eslintPlugin from 'vite-plugin-eslint';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',
      '~': path.resolve(__dirname, 'src'),
      '@css': path.resolve(__dirname, 'src/css/'),
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
    },
  },
  plugins: [tsconfigPaths(), eslintPlugin(), react()],
});
