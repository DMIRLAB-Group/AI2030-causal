import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

export default defineConfig({
  base: '/AI2030-causal/',
  plugins: [
    vue(),
    AutoImport({
      // 自动导入 Vue 相关函数，以及 Element Plus 的按需 API
      imports: ['vue', 'vue-router', 'pinia'],
      dts: true,
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      // 自动按需注册组件
      resolvers: [ElementPlusResolver({ importStyle: 'css' })],
      dts: true,
    }),
  ],
  server: {
    port: 3000,
  },
});
