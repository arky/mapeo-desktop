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
      alias: {
        'randombytes': './node_modules/randombytes/browser.js',
        'react-intl': './node_modules/react-intl/lib/index.es.js'
      }
      // 'randombytes': 'randombytes',
      // "./node_modules/randombytes/browser.js"
      // 'react': 'react-intl'
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
        presets: ['@babel/preset-react', '@babel/preset-env'],
        plugins: [
          'lodash',
          'transform-object-rest-spread',
          'transform-class-properties'
        ]
      }
    }]
  }

}
