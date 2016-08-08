var fs = require('fs');

fs.renameSync("./Sample.md", "./MySample.md");

if(err) {
    console.log(err);
} else {

    console.log("Sample file has been renamed!");

}
