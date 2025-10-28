const http = require('http');
const url = require('url');
http.createServer((req, res) => {
res.writeHead(200, {'Content-Type': 'text/plain'});
const _input = url.parse(req.url, true);
for (const [key, value] of
Object.entries(_input.query)) {
res.write(`${key} - ${value}\n`);
}
res.end();
}).listen(8887, () => {
console.log('Server running at localhost:8887');
});