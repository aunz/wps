'use strict'

const path = require('path')
require('shelljs/global')

//make the src folder
mkdir('-p','../../src')
mkdir('-p','../../tool')
mkdir('-p','../../test')

cp('./template/webpack.config.js','../../tool/webpack.config.js')
cp('./template/webpack.config.test.js','../../tool/webpack.config.test.js')
cp('./template/build.js','../../tool/build.js')
cp('./template/dev.js','../../tool/dev.js')
cp('./template/clean.js','../../tool/clean.js')
cp('./template/index.html','../../tool/index.html')
''.toEnd('../../index.js')
''.toEnd('../../test/index.js')

let tmp = require(path.resolve('../../package.json'))
if (!tmp) tmp = {}
tmp.babel = {
  "presets": ["es2015", "stage-0"],
  "plugins": ["transform-runtime"]
}
if (!tmp.script) tmp.script = {}
tmp.script.test = 'node tool/test'
JSON.stringify(tmp,null,2).to('../../package.json')	

