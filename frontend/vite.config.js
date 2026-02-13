import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // permite conexiones externas
    allowedHosts: [
      'fleshier-signatureless-gustavo.ngrok-free.dev'
    ]
  }
})
