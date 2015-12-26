'use strict'

require('./clean.js')

const webpack = require('webpack')
let config = require('./webpack.config.js')

config.plugins.push(
  new webpack.DefinePlugin({
		__DEV__ : false,
		'process.env.NODE_ENV' : '"production"'
	}),
	new webpack.optimize.DedupePlugin(),
	new webpack.optimize.AggressiveMergingPlugin(),
	new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}, sourceMap: false})
)
webpack(config).run((err,stats) => {  
	console.log('Client Bundles \n',stats.toString({colors:true}),'\n')
})