// const http = require('http');
// const url = require('url');
// http.createServer((req, res) => {
// res.writeHead(200, {'Content-Type': 'text/plain'});
// const _input = url.parse(req.url, true);
// for (const [key, value] of
// Object.entries(_input.query)) {
// res.write(`${key} - ${value}\n`);
// }
// res.end();
// }).listen(8887, () => {
// console.log('Server running at localhost:8887');
// });

const http = require('http');
const url = require('url');
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<!doctype html><html lang="en"><head><meta charset="utf-8">' +
    '<title>Get Request</title></head><body><h3>Get Request</h3><div><ul>')
    const _input = url.parse(req.url, true);
    for (const [key, value] of Object.entries(_input.query)) {
    res.write(`<li>${key} - ${value}</li>`);
    }
    res.write("</ul></div></body></html>");
    res.end();
    }).listen(8887, () => {
    console.log('Server running at localhost:8887');
});