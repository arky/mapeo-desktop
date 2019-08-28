const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  mode: 'none',
  entry: './src/renderer/app.js',
  target: 'electron-renderer',
  externals: [nodeExternals({
    whitelist: ['randombytes', 'react-intl'],
    modulesDir: path.resolve(__dirname, 'node_modules')
  })],
  lodash: {
    commonjs: 'lodash',
    commonjs2: 'lodash',
    amd: 'lodash',
    root: '_'
  },
  output: {
    filename: 'static/build.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [{
      test: /\.js$/,
      include: path.resolve(__dirname, 'src'),
      loader: 'babel-loader',
      query: {
        presets: ['react', 'env'],
        plugins: [
          'transform-object-rest-spread',
          'transform-class-properties',
          'transform-es2015-classes'
        ]
      }
    }]
  },
  resolve: {
    alias: {
    // 'react$': path.resolve(__dirname, './node_modules/react/dist/react.min.js'),
      'lodash$': path.resolve(__dirname, './node_modules/lodash/lodash.min.js')
    }
  }
}
