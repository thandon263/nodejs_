var http = require('http');

var server = http.createServer(function(req, res) {

    res.writeHead(200, {"Content-Type": "text/plain"});

    res.end(`

        <!DOCTYPE html>
        <html lang="en">
            <head>
                <title>The server for HTTP request in NODE.JS</title>
                <meta charset="UTF-8" />
            </head>
            <body>
                <h1>HTTP Respone on port 2000</h1>
                <br>
                <p> Lets get started with Web services ${req.url}  </p>
                <p>${req.method}
            </body>
        </html>

    `);

});

server.listen(2000);

console.log("Server listening and is Running on Port: 2000")
