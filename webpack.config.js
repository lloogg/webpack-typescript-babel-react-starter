const path = require('path');
const webpack = require('webpack');
module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src/index.tsx'),
  devtool: 'source-map',
  target: 'web',
  module: {
    rules: [
      {
        test: [/\.tsx$/, /\.ts$/, /\.js$/],
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/'
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 4000
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react'
    })
  ]
};
