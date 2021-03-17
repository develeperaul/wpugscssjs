const path = require('path')
module.exports = {
  entry: {
    app: './src/index.js'
  },

 output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist'
  },
  devServer: {
    overlay: true,
    open: true
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exlude: '/node_modules'
    }]
  }
}