/**
 * Created by irfan on 01/01/2017.
 */
const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry  : [
    'webpack-hot-middleware/client',
    path.join(__dirname, 'presentation/components', 'main.jsx')
  ],
  output: {
    path: path.join(__dirname,'static'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module : {
    loaders: [{
      test   : /\.js|\.jsx?/,
      loaders: ['babel'],
      include: path.join(__dirname, 'presentation/components')
    },
      {
        test  : /\.scss$/,
        loader: "style-loader!css-loader!sass-loader"
      },
      {
        test  : /\.less$/,
        loader: "style!css!less"
      },
      {
        test: /\.json$/,
        loader: 'json-loader!json-loader'
      }]
  }
}