import * as dotenv from 'dotenv';
dotenv.config();
const http = require('http');

const hostname = process.env.NODE_HOSTNAME;
const port = process.env.NODE_PORT;

const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('hej');
});

server.listen(port, hostname, () =>{
    console.log(`server running at http://${hostname}:${port}/`);
})