const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  mode: 'development',
  entry: './src/renderer/app.js',
  target: 'electron-renderer',
  externals: [nodeExternals()],
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
  }
}
