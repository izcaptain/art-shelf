const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'main.js',
  },
  mode: 'development',
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
        },
      },
    ],
  },
  stats: {
    colors: true,
  },
  devtool: 'source-map',
}
