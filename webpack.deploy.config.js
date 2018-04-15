module.exports = {
  entry: ['babel-polyfill', './src/index.jsx'],
  output: {
    path: __dirname + '/dist',
    filename: 'deploy.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};