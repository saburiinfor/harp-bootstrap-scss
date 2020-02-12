var path = require('path');
var webpack = require('webpack');

const PATHS = {
  app: path.join(__dirname, './public/js/'),
  modulesPath: __dirname
};

module.exports = {
  entry: {
    app: './public/js/index.js'
  },
  mode: "development",
  resolve: {
    extensions: ['.js', '.scss']
  },
  output: {
    path: __dirname,
    filename: './public/js/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['sass-loader']
      },
      {
        test: /\.(pdf|jpg|png|gif|svg|ico)$/, loader: "file-loader"
      },
      {
        test: /\.json$/,
        exclude: /(node_modules)/,
        loader: 'json-loader'
      }
    ]
  }
};