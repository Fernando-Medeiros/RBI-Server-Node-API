import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
    test: {
        globals: true,
        environment: 'node',
        includeSource: ['src/**/*.ts', 'tests/**/*.ts'],
        include: ['**/*.{test,spec}.ts'],
    },
    resolve: {
        alias: {
            app: path.resolve(__dirname, './src/application/'),
            domain: path.resolve(__dirname, './src/domain/'),
            infra: path.resolve(__dirname, './src/infrastructure/'),
            core: path.resolve(__dirname, './src/core/'),
            utils: path.resolve(__dirname, './src/utils/'),
            docs: path.resolve(__dirname, './docs/'),
            tests: path.resolve(__dirname, './tests/'),
            example: path.resolve(__dirname, './examples/'),
        },
    },
});
