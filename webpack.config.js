var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

module.exports = {
  entry: [
    './src/app'
  ],
  output: {
    filename: 'public/app.js',
    publicPath: '/'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: { 
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        exclude: /normalize\.css$/,
        loaders: ['style-loader',
        'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]']
      }
    ]
  },

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js']
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    })
  ],

  node: {
    fs: 'empty'
  },

  target: 'node',

  cache: false,

};