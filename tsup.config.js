import { defineConfig } from 'tsup';

const env = process.env.NODE_ENV;

export default defineConfig(() => ({
  minify: env === 'production',
  watch: env === 'development',
  clean: true,
  dts: true,
  format: ['cjs', 'esm'],
  bundle: true,
  target: 'es2020',
  entry: ["src/index.ts"],
  outDir: "./lib",
  splitting: false,
}));
