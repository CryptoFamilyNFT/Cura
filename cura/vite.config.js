import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as mui from '@mui/material'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), mui ],
  assetsInclude: ['**/*.glb', '**/*.gltf']
  
})
