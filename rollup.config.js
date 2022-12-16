// rollup.config.js

import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
const extensions = ['.js', '.ts']

const config = {
  input: "src/index.js",
  output: {
    format: 'es',
    dir: './dist/',
    name : 'useStorage' ,
    globals: {
      'crypto-js': 'CryptoJS',
    },
  },

  plugins: [
   
    resolve({extensions}),
    babel({ babelHelpers: "bundled" }),
  
  ],
  external: ['crypto-js']
};

export default config;
