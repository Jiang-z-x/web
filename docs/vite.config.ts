import { defineConfig } from "vite";
import Unocss from "unocss/vite";
import vueJsx from "@vitejs/plugin-vue-jsx";


export default defineConfig({
    plugins: [
        // 添加JSX插件
        vueJsx(),
        Unocss(),
    ],
    server: {
        port: 3000,
    },
});