const converter = require('./lib/hexa-binary-converter.js');

const number = "AB1011";

console.log(converter.hexaToBin(number));

const binNro = '10101111';

console.log(converter.binToHexa(binNro));