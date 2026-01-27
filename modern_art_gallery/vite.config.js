import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base:'./',
  root: './', // Asegura que Vite busque archivos en la raíz
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'), // Alias para rutas absolutas
    },
  },
});