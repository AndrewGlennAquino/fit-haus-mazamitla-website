import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/fit-haus-mazamitla-website",
  plugins: [react()],
})
