// Disabled for now due to build complexity
// Rich Harris is taking a look

// import babel from 'rollup-plugin-babel'
// import babelrc from 'babelrc-rollup'
// import istanbul from 'rollup-plugin-istanbul'
//
// let pkg = require('./package.json')
// let external = Object.keys(pkg.dependencies)
//
// export default {
//   entry: 'lib/index.js',
//   plugins: [
//     babel(babelrc()),
//     istanbul({
//       exclude: ['test/**/*', 'node_modules/**/*']
//     })
//   ],
//   external: external,
//   targets: [
//     {
//       dest: pkg['main'],
//       format: 'umd',
//       moduleName: 'uportLib',
//       sourceMap: true
//     },
//     {
//       dest: pkg['jsnext:main'],
//       format: 'es',
//       sourceMap: true
//     }
//   ]
// }
