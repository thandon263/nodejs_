var path = require('path');
var util = require('util');
var v8 = require('v8');

util.log( path.basename(__filename) );

util.log( v8.getHeapStatistics() );

console.log( path.basename(__filename) );

var dirUploads = path.join(__dirname, 'www', 'file', 'uploads');

console.log(dirUploads);
