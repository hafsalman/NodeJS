const http = require('http');
const fs = require('fs');

const myServer = http.createServer((req, res) => {
    // console.log("New Request Received");
    // console.log(req);

    const log = `${Date.now()}: ${req.url} New Request Received\n`;
    fs.appendFile('log.txt', log, (err, data) =>{
        res.end("Hello from server");
    });
});

myServer.listen(8000, () => console.log("Server started"))