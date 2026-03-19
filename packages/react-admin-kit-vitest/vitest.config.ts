import { defineConfig } from 'vitest/config';
import { playwright } from '@vitest/browser-playwright';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  ssr: {
    // 支持混合 ESM/CJS
    noExternal: ['react-admin-kit'],
  },
  test: {
    alias: {
      'react-admin-kit': path.resolve(__dirname, '../react-admin-kit/src'),
    },
    browser: {
      enabled: true,
      provider: playwright(),
      instances: [{ browser: 'chromium' }],
    },
  },
});
