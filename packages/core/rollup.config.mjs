import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import path from 'node:path';

const resolveAlias = {
  entries: [
    { find: '@theme', replacement: path.resolve(__dirname, 'src/theme') },
    { find: '@plugins', replacement: path.resolve(__dirname, 'src/plugins') },
    { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
    { find: '@utils', replacement: path.resolve(__dirname, 'src/utils') }
  ]
};

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: 'src',
      exports: 'named'
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: 'src',
      exports: 'named'
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
      declarationDir: 'dist',
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
