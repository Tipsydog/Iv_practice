console.log(100)


var $ = require('jquery')
console.log($) 

var $root = $('#root')
$root.html('<p>这是jquery插入的文字</p>')

var aUtil = require('./a-util.js')
aUtil.print() 