import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/kivi_portfolio/',
  plugins: [react()],
})
