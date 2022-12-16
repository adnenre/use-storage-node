// rollup.config.js
import pkg from './package.json' assert { type: "json" };
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
const extensions = ['.js', '.ts']

const config = {
  input: "src/index.js",
  output:[
    {
        file: pkg.main,
        format: 'cjs'
     },
    {
        file: pkg.module,
        format: 'es'
    }
],

  plugins: [
   
    resolve({extensions}),
    babel({ babelHelpers: "bundled" }),
  
  ],
  external: ['crypto-js']
};

export default config;
