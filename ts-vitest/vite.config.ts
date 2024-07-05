/// <reference types="vite/client" />
/// <reference types="vitest" />

import { defineConfig } from "vite";

export default defineConfig({
    test: {
        setupFiles: ["./src/tests/vitest-setup.ts"],
        environment: "jsdom",
        globals: true,
        coverage: {
            provider: "v8",
            include: ["src/**"],
            exclude: ["src/tests/utils/**"],
        },
    },
});
