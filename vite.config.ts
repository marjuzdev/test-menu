import { defineConfig } from 'vite'
import path from 'path';

const assetsDir = 'assets/';

const outputDefaults = {
  // remove hashes from filenames
  entryFileNames: `${assetsDir}[name].js`,
  chunkFileNames: `${assetsDir}[name].js`,
  assetFileNames: `${assetsDir}[name].[ext]`,
}

export default defineConfig({
  base: './',
  resolve:{
    alias:{
      '@' : path.resolve(__dirname, './src'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@layout': path.resolve(__dirname, 'src/layout')
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@import 'variables.scss';",
      },
    },
  },
  build: {
    target: "esnext",
    sourcemap: true,
    rollupOptions: {
      output: {
        ...outputDefaults,
      }
    },
  },
  plugins: []
})   
