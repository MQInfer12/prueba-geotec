///<reference types="vitest" />
///<reference types="Vite/client" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //@ts-ignore
  test: {
    environment: 'jsdom',
    globals: true
  },
})
