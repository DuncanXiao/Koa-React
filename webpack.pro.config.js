const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const appDirectory = path.resolve(__dirname, 'src');
const builtDirectory = path.resolve(__dirname, 'server/static/js');
const globalStyleDirectory = appDirectory + '/stylesheet/global';
const extractAppStyle = new ExtractTextPlugin('[name]-apps.css');

module.exports = {
  entry: {
    index: ['babel-polyfill', 'whatwg-fetch', './src/apps/server.jsx']
  },
  output: {
    path: builtDirectory,
    filename: '[name]-product.js',
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
        test: /\.(scss)$/,
        include: appDirectory,
        exclude: globalStyleDirectory,
        use: extractAppStyle.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                camelCase: true,
                localIdentName: '[local]--[hash:base64:5]'
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                includePaths: [
                  appDirectory+'/stylesheet'
                ]
              }
            }
          ]
        })
      }
    ]
  },
  resolve: {
    enforceExtension: false,
    extensions: ['.js', '.jsx'],
    modules: ["node_modules"],
    alias: {
      Components: appDirectory + '/components',
      Apps: appDirectory + '/apps',
      Stylesheet: appDirectory + 'constant'
    }
  },
  plugins: [
    extractAppStyle,
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom'
    })
  ]
};