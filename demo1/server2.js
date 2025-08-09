// Using http server
// const http = require('http');  //type common js
import http from 'http';  // type module js

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World from HTTP Server!'); // send the body to the end and ends the request response cycle
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000/");
});