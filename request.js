var https = require('https');
var fs = require('fs');

var options = {
    hostname: "en.wikipedia.org",
    port: 443,
    path: "/wiki/George_Washington",
    method: "GET"
};

var req = https.request(options, function(res) {
    var responseBody = "";

    console.log("Response from server started.");
    console.log(`Server Status: ${res.StatusCode}`);
    console.log("Response Headers: %j", res.headers);

    res.setEncoding("UTF-8");

    res.once("data", function(chunk){
        console.log(chunk);
    });

    res.on('data', function(chunk) {
        console.log(`--chunk-- ${chunk.length}`);
        responseBody += chunk;
    });

    res.on('end', function(){
        fs.writeFile("george-washington.html", respponseBody, function(err) {
            if (err) {
                throw err;
            }

            console.log("File Downloaded");
        });
    });
});


req.on("error", function(err){
    console.log(`Problem with request: ${err.message}`);
});

req.end();
