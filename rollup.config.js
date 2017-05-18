import buble from 'rollup-plugin-buble';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  format: 'iife',
  entry: "es6/app.js",
  dest: "js/app.js",
  moduleName: "moduleFoo",
  plugins: [
    nodeResolve({
      jsnext: true,
      main: true
    }),
    commonjs({
      // non-CommonJS modules will be ignored, but you can also
      // specifically include/exclude files
      include: 'node_modules/**',  // Default: undefined
      // explicitly specify unresolvable named exports
      // (see below for more details)
      // namedExports: { './module.js': ['foo', 'bar' ] },  // Default: undefined

    }),
    json({
      exclude: [ 'node_modules/**' ]
    }),
    buble({
      exclude: ['node_modules/**', '*.json']
    })
  ]
}
