import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src/index.ts"],
    outDir: "dist",
    sourcemap: true,
    clean: true,
    format: ["esm"], // Ensure you're targeting CommonJS
    external: [
        "dotenv",
        "fs",
        "path",
        "https",
        "http",
        "zod",
        "ethers",
        "whatwg-url",
        "@elizaos/core",
    ],
});
