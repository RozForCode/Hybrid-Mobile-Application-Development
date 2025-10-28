console.log(__filename);
const path = require("path");
console.log(`Directory is ${path.dirname(__filename)}`);
console.log(`File is ${path.basename(__filename)}`);

const fs = require('fs');
fs.readFile(__filename, 'utf-8', (err, data) => {
if(err) { throw err; }
console.log('\nAsync File Content:\n' + data);
});
content = fs.readFileSync(__filename, 'utf-8');
console.log('\nSync File Content:\n' + content);
require('./first_app');

const convert = require('./convert.js');
const cel = 0;
console.log('\n' + convert.desc);
console.log(`${cel} degrees Celsius =
${convert.toFah(cel)} degrees Fahrenheit`);
const fah = 32;
console.log(`${fah} degrees Fahrenheit =
${convert.toCel(fah)} degrees Celsius`);