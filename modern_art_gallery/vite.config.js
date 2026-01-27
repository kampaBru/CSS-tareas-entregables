import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base:'/CSS-tareas-entregables/modern_art_gallery/',
  root: './', // Asegura que Vite busque archivos en la raíz
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'), // Alias para rutas absolutas
    },
  },
});