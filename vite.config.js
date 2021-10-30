import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    host: '0.0.0.0'
  },
  plugins: [
    vue(),
    // 自动按需导入：原理是直接在源文件中加入了import语句
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
})
