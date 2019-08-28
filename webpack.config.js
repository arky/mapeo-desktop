const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  mode: 'none',
  optimization: {
    sideEffects: false
  },
  entry: './src/renderer/app.js',
  target: 'electron-renderer',
  externals: [nodeExternals({
    whitelist: ['lodash', 'randombytes', 'react-intl'],
    modulesDir: path.resolve(__dirname, 'node_modules'),
    resolve:
    {
      'randombytes': 'randombytes',
      // "./node_modules/randombytes/browser.js"
      'react': 'react-intl'
    }

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
          // new webpack.ProvidePlugin({join: ['lodash', 'join']})
          'transform-object-rest-spread',
          'transform-class-properties',
          'transform-es2015-classes'
        ]
      }
    }]
  }

}
