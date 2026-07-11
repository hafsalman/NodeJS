const http = require('http');
const fs = require('fs');

const myServer = http.createServer((req, res) => {
    // console.log("New Request Received");
    // console.log(req);

    if (req.url === '/favicon.ico') return res.end();

    const log = `${Date.now()}: ${req.url} New Request Received\n`;
    fs.appendFile('log.txt', log, (err, data) =>{
        // res.end("Hello from server");
        switch (req.url) {
            case '/':
                res.end("Home Page");
                break;
            
            case '/about':
                res.end("About page");
                break;

            default:
                res.end("404 Page Not Found");
                break;
        }
    });
});

myServer.listen(8000, () => console.log("Server started"))