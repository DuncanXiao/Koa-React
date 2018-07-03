const path = require('path');
const webpack = require('webpack');
const _externals = require('externals-dependencies');
const serverDirectory = path.resolve(__dirname, 'server');
const builtDirectory = path.resolve(__dirname, 'dist');

module.exports = {
  node: {
    __dirname: true,
    path: true
  },
  externals: _externals(),
  entry: {
    index: ['babel-polyfill', serverDirectory + '/app.js']
  },
  output: {
    path: builtDirectory,
    filename: '[name]-server.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  resolve: {
    enforceExtension: false,
    extensions: ['.js'],
    modules: ["node_modules"],
    alias: {
      Controllers: serverDirectory + '/controllers',
      Routers: serverDirectory + '/routers',
      Static: serverDirectory + '/static',
      Views: serverDirectory + '/views',
      Constant: serverDirectory + '/constant',
      Sql: serverDirectory + '/sql',
      Utilities: serverDirectory + '/utilities',
      Model: serverDirectory + '/model'
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
};