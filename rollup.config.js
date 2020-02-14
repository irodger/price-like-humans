import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { uglify } from "rollup-plugin-uglify";

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'cjs'
  },
  plugins: [
    resolve(),
    typescript({
      typescript: require('typescript'),
    }),
    uglify(),
  ]
};