'use strict'

const path = require('path')
require('shelljs/global')

//make the src folder
mkdir('-p','../../src')
mkdir('-p','../../tool')
mkdir('-p','../../test')

cp('./template/*','../../tool')

''.toEnd('../../src/index.js')
''.toEnd('../../test/index.test.js')

let tmp = require(path.resolve('../../package.json'))

//make a copy of the old package.json
cp('package.json','package.'+Date.now()+'.json')

tmp.babel = {
  "presets": ["es2015", "stage-0"],
  "plugins": ["transform-runtime"]
}
if (!tmp.script) tmp.script = {}
tmp.script.test = 'node tool/test'
tmp.script.dev = 'node tool/dev'
tmp.script.bundle = 'node tool/bundle'
tmp.script.build = 'babel src -d lib'
tmp.scrip.clean = "rm -rf build && rm -rf test/build"
tmp.script.prepublish: 'npm run clean && npm run build && npm run bundle'

JSON.stringify(tmp,null,2).to('../../package.json')	