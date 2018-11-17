const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const appDirectory = path.resolve(__dirname, 'src');
const builtDirectory = path.resolve(__dirname, 'dist');
const globalStyleDirectory = appDirectory + '/stylesheet/global';
const extractAppStyle = new ExtractTextPlugin('[name]-apps.css');
const extractGlobalStyle = new ExtractTextPlugin('[name]-global.css');

module.exports = {
  entry: {
    index: ['babel-polyfill', 'whatwg-fetch', './src/index.jsx']
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
      },
      {
        test: /\.css$/,
        include: globalStyleDirectory,
        use: extractGlobalStyle.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader'
            }
          ]
        })
      },
      {
        test: /\.(ttf|woff2|woff|eot|svg)/,
        include: appDirectory,
        use: {loader: 'file-loader'}
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
      Stylesheet: appDirectory + 'constant',
      Utilities: appDirectory + 'utilities'
    }
  },
  plugins: [
    extractGlobalStyle,
    extractAppStyle,
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