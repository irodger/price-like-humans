import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { uglify } from 'rollup-plugin-uglify';
import path from 'path';

export default {
  input: path.join(__dirname, 'src', 'index.ts'),
  output: {
    file: path.join(__dirname, 'dist', 'index.js'),
    format: 'cjs',
  },
  plugins: [
    resolve(),
    typescript({
      typescript: require('typescript'),
    }),
    uglify(),
  ],
};
