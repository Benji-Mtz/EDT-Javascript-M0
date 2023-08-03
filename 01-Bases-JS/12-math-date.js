/**
 * Math y Date
 */

// random arroja un número aleatorio entre 0 y 1
const valor = Math.random() * 10;
console.log(valor);

const pi = Math.PI;
const sqrt2 = Math.sqrt(25);

console.log(pi, sqrt2);

const maxNum = Math.max(12,3,4,60,43);
const minNum = Math.min(12,3,4,60,43);

console.log(maxNum, minNum);

let date = new Date;
console.log(date)
console.log(date.getFullYear())
console.log(date.getMinutes())
console.log(date.getUTCDate())