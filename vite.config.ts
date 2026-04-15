import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/2026AsgsWebmasterChallenge/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  // We removed the 'path' alias entirely to stop the errors
  assetsInclude: ['**/*.svg', '**/*.csv', '**/*.png', '**/*.jpg', '**/*.jpeg'],
})