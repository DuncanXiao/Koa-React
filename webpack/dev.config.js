const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const common = require('./dev-common.config');
const globalStyleDirectory = common.appDirectory + '/stylesheet/global';
const extractAppStyle = new ExtractTextPlugin('[name]-apps.css');
const extractGlobalStyle = new ExtractTextPlugin('[name]-global.css');

const setting = {
  entry: common.entry,
  output: {
    path: common.builtDirectory,
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
        include: common.appDirectory,
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
                  common.appDirectory+'/stylesheet'
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
        include: common.appDirectory,
        use: {loader: 'file-loader'}
      }
    ]
  },
  plugins: [
    extractGlobalStyle,
    extractAppStyle,
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
    // new HtmlWebpackPlugin({
    //   title: 'Koa-React',
    //   template: common.appDirectory + '/index.ejs',
    //   htmlWebpackPlugin: {
    //     files: {
    //       css: [ "[name]-global.css" ],
    //       js: [ "common.js", "index.js"]
    //     }
    //   }
    // })
  ],
  devServer: {
    contentBase: common.builtDirectory,
    port: 3000,
    historyApiFallback: true,
    inline: true,
    hot: true
  }
};
const configs = Object.assign({}, common.baseSetting, setting);
module.exports = configs;
