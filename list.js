var fs = require('fs');

fs.readdir('./', function() {

    if(err) {
        throw err;
    }

    console.log(files);

});

console.log("Reading Files...");

