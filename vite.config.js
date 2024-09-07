import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/LabTutor/',  // Solo el nombre del repositorio entre barras
})
