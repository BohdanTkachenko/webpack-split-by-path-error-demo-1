var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var SplitByPathPlugin = require('webpack-split-by-path');

module.exports = {
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-[hash].js',
  },
  plugins: [
    new SplitByPathPlugin([{
      name: 'vendor',
      path: path.join(__dirname, 'node_modules')
    }]),
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
};
