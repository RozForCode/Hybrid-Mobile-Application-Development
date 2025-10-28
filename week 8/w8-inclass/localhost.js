const http = require('http');
const hostname = '127.0.0.1';
const port = 8887;
http.createServer((req, res) => {
    console.log('Header: ',req.headers);
    console.log('Method: ',req.method);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is from Local Server\n');
    req.on('end',() => {
    console.log("End of data"); })
    res.end();
    }).listen(port,() => {
    console.log(`Server running at http://${hostname}:
    ${port}/`);
});
/*
Where do (req, res) come from?

When the 'request' event fires, Node internally creates and passes two special objects:

req → an instance of http.IncomingMessage
res → an instance of http.ServerResponse

Both are stream-based objects built on Node’s core stream API
meaning they’re subclasses of Readable and Writable streams, respectively.

so think of req as input buffer
and res as output buffer

req = parsed, readable stream of incoming data.
res = writable stream that builds the outgoing response.
*/