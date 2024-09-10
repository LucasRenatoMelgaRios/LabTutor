import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  assetsInclude: ['**/*.png', '**/*.PNG'], // Asegura que se incluyan tanto .png como .PNG
  plugins: [react()],
  base: '/LabTutor/',  // Solo el nombre del repositorio entre barras
})
