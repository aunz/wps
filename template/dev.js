'use strict'

require('./clean.js')

const webpack = require('webpack')
let config = require('./webpack.config.js')
config.devtool = 'cheap-module-eval-source-map'

//uncomment for client side hot reloading
//config.entry.unshift('webpack-hot-middleware/client?overlay=false&reload=true&noInfo=true&quiet=true')
//config.plugins.push(new webpack.HotModuleReplacementPlugin())

const compiler = webpack(config)
compiler.watch({},(err,stats) => {  
	console.log(stats.toString({colors:true}))
})

//uncomment for client side hot reloading
/*
const js = 'bundle.js'
const fs = require('fs')

require('http').createServer((req, res) => {	
	if (req.url == '/') return res.end(`<!DOCTYPE html><html><body><script src="${js}"></script></body></html>`)
	
	if (req.url == '/__webpack_hmr') return require('webpack-hot-middleware')(compiler,{
  	log: false,
  	noInfo: true
	})(req,res)
	
	require('fs').createReadStream('./build/'+req.url)
	  .on('error',function(e){
	  	res.statusCode = 404
	  	res.end('404')
	  })
	  .pipe(res)
  
}).listen(3000)*/