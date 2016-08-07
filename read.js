var fs = require('fs');

fs.readdir("./", function(err, files) {

    files.forEach(function(filename) {
       var file = path.join(__dirname, "./", fileName);
        var stats = fs.staSync(file);
        if(stats.isFile() && fileName !== ".DS_Store") {

            fs.readFile(file, "UTF-8", function(err, contents) {

                console.log(contents);

            });

        }
    });

});

console.log(contents);
