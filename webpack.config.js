const path = require('path');

module.exports = {
  entry: {
    javascript: './index.js'
  },
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loaders: ['babel']
      }
    ]
  }
};
