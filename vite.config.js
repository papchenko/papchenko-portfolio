import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'

export default defineConfig(({ command }) => {

  const config = {
    plugins: [
      react(),
      tailwindcss(),
    ],
    base: '/',
  }

  if (command === 'serve') {
    config.server = {
      https: {
        key: fs.readFileSync('./certs/key.pem'),
        cert: fs.readFileSync('./certs/cert.pem'),
      },
      host: '0.0.0.0',
      port: 5173
    }
  }

  return config
})