import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import VueRouter from 'unplugin-vue-router/vite'
import fs from "node:fs";

const catalogs = fs
    .readdirSync('./src/modules/', {withFileTypes: true})
    .filter((item) => item.isDirectory())
    .map((item) => item.name);

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        VueRouter({
            routesFolder: ["src/pages", ...catalogs.map((item) => `./src/modules/${item}/views/`)],
        }),
        vue()],

})
