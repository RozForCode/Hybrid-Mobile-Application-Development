const http = require('http');
const hostname = '127.0.0.1';
const port = 8887;
http.createServer((req, res) => {
console.log('Header: ', req.headers);
console.log('Method: ',req.method);
res.writeHead(200, {'Content-Type': 'text/plain'});
res.write('This is from Local Server\n');
res.end();
}).listen(port,() => {
console.log(`Server running at
http://${hostname}:${port}/`);
}); 27

