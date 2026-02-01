import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  // @ts-ignore
  test: {
  globals: true,
  environment: 'jsdom',
  setupFiles: ['src/CustomClassNameSetup.ts'],
  coverage: {
    provider: 'v8',
    reporter: ['text', 'lcov'],
    all: true, // مهم جداً ليشمل كل الملفات
    include: ['src/**/*.ts', 'src/**/*.tsx'],
    exclude: ['node_modules/', 'src/vite-env.d.ts'],
    },
  },
})