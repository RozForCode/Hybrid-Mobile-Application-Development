const http = require('http');
const options = { host: '127.0.0.1',
port: 8887,
path: '/?name=Andy%20Pak&lName=Pak',
method: 'GET' };
const req = http.request(options, (res) => {
res.on('data', msg => {
process.stdout.write(msg)
})
res.on('end', () => {
console.log('\nRequest completed.');
});
})
req.on('error', error => { console.log(error); })
req.end()