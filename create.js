var fs = require('fs');

var md = `

Sample Markdown Titile
======================

Sample subtitle
---------------

* Point
* Point
* Point

`

fs.writeFile('Sample.md', md.trim(), function(err) {

    console.log('file created');

});
