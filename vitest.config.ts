import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    includeSource: ["src/**/*.ts", "tests/**/*.ts"],
    include: ["**/*.{test,spec}.ts"],
  },
  resolve: {
    alias: {
      "@root": path.resolve(__dirname, "./"),
      "@src": path.resolve(__dirname, "./src/"),
      "@inf": path.resolve(__dirname, "./src/infrastructure/"),
      "@app": path.resolve(__dirname, "./src/application/"),
      "@dom": path.resolve(__dirname, "./src/domain/"),
      "@tes": path.resolve(__dirname, "./tests/"),
    },
  },
});
