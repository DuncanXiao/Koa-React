const webpack = require('webpack');
const path = require('path');
const appDirectory = path.resolve(__dirname, '../src');
const builtDirectory = path.resolve(__dirname, '../dist');

const page = {
  homePage: [`${appDirectory}/apps/HomePage/entry.jsx`]
}

const entry = {
  index: page[`${process.env.page}`]
}

const baseSetting = {
  resolve: {
    enforceExtension: false,
    extensions: ['.js', '.jsx'],
    modules: ['node_modules'],
    alias: {
      Components: appDirectory + '/components',
      Apps: appDirectory + '/apps',
      Stylesheet: appDirectory + 'constant',
      Utilities: appDirectory + 'utilities'
    }
  }
};

const definePlugin = new webpack.DefinePlugin({});

module.exports = {
  baseSetting,
  definePlugin,
  appDirectory,
  builtDirectory,
  entry
};
