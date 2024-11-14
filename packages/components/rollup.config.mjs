import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { fileURLToPath } from 'node:url';
import { dirname, resolve as pathResolve } from 'node:path';
import glob from 'fast-glob';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const resolveAlias = {
  entries: [
    { find: '@components', replacement: pathResolve(__dirname, 'src/components') }
  ]
};

// Get all template entry points
const templateEntries = glob.sync('src/templates/components/*/index.ts');

export default [
  {
    input: templateEntries,
    output: {
      dir: 'dist/templates',
      format: 'esm',
      preserveModules: true,
      preserveModulesRoot: 'src/templates',
      sourcemap: true
    },
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
        declarationDir: 'dist/templates',
        rootDir: 'src/templates',
        outDir: 'dist/templates',
        sourceMap: true
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
      '@doom-ui/core',
      'framer-motion',
      '@iconify/react'
    ]
  }
];
