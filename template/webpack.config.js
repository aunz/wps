'use strict'

const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: ['./index.js'],
  output: {
    path: './build',
    filename: 'bundle.js',
    // libraryTarget: 'var',
    // library: path.basename(path.resolve())
  },
  //target: 'web'  
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'stage-0'],
        plugins: ['transform-runtime'], 
        cacheDirectory: true, //cache into OS temp folder by default
      }
    }]
  },
  plugins: [
  
  ],
/*  externals: [
    /^[@a-z][a-z\/\.\-0-9]*$/i
  ],
  node: {
    console: true,
    __filename: true,
    __dirname: true,
  }*/
}
