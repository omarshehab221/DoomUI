import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { fileURLToPath } from 'node:url';
import { dirname, resolve as pathResolve } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const resolveAlias = {
  entries: [
    { find: '@theme', replacement: pathResolve(__dirname, 'src/theme') },
    { find: '@plugins', replacement: pathResolve(__dirname, 'src/plugins') },
    { find: '@components', replacement: pathResolve(__dirname, 'src/components') },
    { find: '@utils', replacement: pathResolve(__dirname, 'src/utils') }
  ]
};

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist',
      format: 'cjs',
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: 'src',
      exports: 'named',
      entryFileNames: '[name].js'
    },
    {
      dir: 'dist',
      format: 'esm',
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: 'src',
      exports: 'named',
      entryFileNames: '[name].esm.js'
    }
  ],
  plugins: [
    external(),
    resolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      alias: resolveAlias.entries
    }),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      outDir: './dist',
      rootDir: 'src'
    }),
    postcss({
      config: {
        path: './postcss.config.js',
      },
      extensions: ['.css'],
      minimize: true,
      inject: {
        insertAt: 'top',
      },
    }),
    terser(),
  ],
  external: [
    'react', 
    'react-dom', 
    'tailwindcss',
    'tailwind-variants', 
    'next-themes', 
    'clsx', 
    'tailwind-merge'
  ]
};
