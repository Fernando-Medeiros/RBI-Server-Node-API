import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    includeSource: ["src/**/*.{js,ts}", "tests/**/*.{js,ts}"],
    include: ["**/*.{test,spec}.{js,ts}"],
  },
  resolve: {
    alias: {
      "@root": path.resolve(__dirname, "./"),
      "@src": path.resolve(__dirname, "./src/"),
      "@inf": path.resolve(__dirname, "./src/firstLayer/"),
      "@app": path.resolve(__dirname, "./src/secondLayer/"),
      "@dom": path.resolve(__dirname, "./src/thirdLayer/"),
      "@tes": path.resolve(__dirname, "./tests/"),
    },
  },
});
