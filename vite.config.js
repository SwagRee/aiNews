import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
   // 设置项目端口
   port: 5173,
  // 运行时自动打开游览器
  open: true,
  proxy: {
    '/chat': {
       // 目标服务器地址
       target: 'http://192.168.85.117:9999',
       // 是否改变源地址
       changeOrigin: true,
       // 重写路径
       rewrite: (path) => path.replace(new RegExp('^' + '/chat'), ''),
     },
   },
  },
})

