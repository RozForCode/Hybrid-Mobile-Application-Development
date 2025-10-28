const toFah = (i) => { return i * 1.8 + 32; };
const toCel = (i) => { return (i-32) * 5 / 9; };
const desc = 'Temperature Conversion';

module.exports = {
toFah,
toCel,
desc
};