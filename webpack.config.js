const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  mode: 'none',
  entry: './src/renderer/app.js',
  target: 'electron-renderer',
  externals: [nodeExternals({
    whitelist: ['lodash', 'randombytes', 'react-intl'],
    modulesDir: path.resolve(__dirname, 'node_modules')
  })],
  output: {
    filename: 'static/build.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [{
      test: /\.js$/,
      include: path.resolve(__dirname, 'src'),
      exclude: /node_modules/,
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
  }
}
