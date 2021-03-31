const path = require('path');
const webpack = require('webpack');
module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/index.tsx'),

  devtool: 'source-map',
  target: 'web',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path]__[local]--[hash:base64:5]',
              },
            },
          },
        ],
      },
      {
        test: [/\.tsx$/, /\.ts$/, /\.js$/],
        use: 'babel-loader',
        exclude: [/node_modules/],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    port: 3000,
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
    }),
  ],
};
