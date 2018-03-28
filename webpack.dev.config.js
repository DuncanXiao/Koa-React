const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const appDirectory = path.resolve(__dirname, 'src');
const builtDirectory = path.resolve(__dirname, 'dist');
module.exports = {
  entry: {
    index: ['babel-polyfill', './src/index.jsx']
  },
  output: {
    path: builtDirectory,
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        include: appDirectory,
        use: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: true,
              localIdentName: '[local]--[hash:base64:5]'
            }
          },
          {loader: 'sass-loader'}
        ]
      }
    ]
  },
  resolve: {
    enforceExtension: false,
    extensions: ['.js', '.jsx'],
    modules: ["node_modules"],
    alias: {
      Component: appDirectory + '/Component'
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Koa-React',
      template: appDirectory + '/index.ejs'
    })
  ],
  devServer: {
    contentBase: builtDirectory,
    port: 3000,
    historyApiFallback: true,
    inline: true,
    hot: true
  }
};