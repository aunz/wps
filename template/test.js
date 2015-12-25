'use strict'

require('shelljs').rm('-rf', './test/build')


const webpack = require('webpack')
let config = require('./webpack.config.test.js')

let child
let builtFile = require('path').join(config.output.path,config.output.filename)

webpack(config).watch({},(err,stats) => {		
  if (stats.hasErrors()) return console.log(stats.toString({colors:true})) 
  if (child) child.kill()  	
	child = require('child_process').fork(builtFile)
    // require('shelljs').exec('node '+builtFile + ' | node_modules\\.bin\\tap-spec')
})