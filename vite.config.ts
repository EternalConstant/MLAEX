import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // 确保构建后的资源路径是相对路径，方便在 GitHub Pages 任意子目录下运行
})