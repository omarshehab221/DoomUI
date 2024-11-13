import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import MagicString from 'magic-string';

const preserveDirectives = () => ({
  name: 'preserve-directives',
  transform(code) {
    if (code.includes('"use client"') || code.includes("'use client'")) {
      const magicString = new MagicString(code);
      return {
        code: code,
        map: magicString.generateMap({
          hires: true,
          includeContent: true
        })
      };
    }
    return null;
  }
});

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true,
      preserveModules: true,
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
      preserveModules: true,
    },
  ],
  plugins: [
    external(),
    resolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: 'dist',
      exclude: ['**/*.stories.tsx', '**/*.test.tsx'],
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
    preserveDirectives(),
    terser(),
  ],
  external: ['react', 'react-dom', 'tailwind-variants', 'next-themes', 'clsx', 'tailwind-merge'],
}; 