const fs = require('node:fs');
console.log('1')
const text = "Learning file stystem";

fs.writeFileSync('./hello.txt', text);
console.log('3')
const data = fs.readFileSync('./hello.txt', {encoding : "utf-8"})
console.log('4')
console.log('data', data)