const webpack = require('webpack');
const path = require('path');
const config = require('config');

const serverDirectory = path.resolve(__dirname, '../server');
const builtDirectory = path.resolve(__dirname, '../dist');
const baseSetting = {
  resolve: {
    enforceExtension: false,
    extensions: ['.js', '.jsx'],
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
  }
}

const definePlugin = new webpack.DefinePlugin({
  'process.env': {
    nodeENV: config.get('env'),
    nodeDomain: config.get('domain'),
    nodeDatebaseConfig: config.get('databaseConfig') 
  }
})

module.exports = {
  baseSetting,
  definePlugin,
  serverDirectory,
  builtDirectory
}