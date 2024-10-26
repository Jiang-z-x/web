/// <reference types="vitest/config" />
import Unocss from "unocss/vite";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
//import { presetUno, presetAttributify, presetIcons } from "unocss";
import $ from "jquery";

var MyBundle = (function ($) {
    // 代码到这里
})(window.jQuery);


const rollupOptions = {
    external: ["vue", "vue-router"],
    output: {
        globals: {
            vue: "Vue",
        },
    },
};

export default defineConfig({
    plugins: [vue(), vueJsx(), Unocss(),],
    resolve: {
        alias: {
            vue: "vue/dist/vue.esm-bundler",
        },
    },
    test: {
        // enable jest-like global test APIs
        globals: true,
        // simulate DOM with happy-dom
        // (requires installing happy-dom as a peer dependency)
        environment: "happy-dom",
    },
    build: {
        rollupOptions,
        minify: "terser",
        cssCodeSplit: true,
        sourcemap: true,
        reportCompressedSize: true, // 生成压缩大小报告
        cssCodeSplit: true,
        // 添加库模式配置
        lib: {
            entry: "./src/entry.ts",
            name: "SSYUI",
            fileName: "ssy-ui",
            // 导出模块格式
            formats: ["es", "umd", "iife"],
        },
    }
});