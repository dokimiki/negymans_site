import { defineConfig } from "eslint/config";
import nextConfig from "eslint-config-next";

export default defineConfig([
    ...nextConfig,
    {
        ignores: ["node_modules/", "dist/", ".next/", "out/"],
    },
]);
