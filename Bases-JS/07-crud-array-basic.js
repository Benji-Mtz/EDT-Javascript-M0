/**
 * Arrays
 */

// Clasic for

let amigos = ["Benji","Pedro", "Paco", "Pablo"];

// Add elements at the end of my array
let dato = amigos.push("Don Gato");
// Add elements at the beginning of my array
// dato = amigos.unshift("Don Gato2");

console.log(dato, amigos)

// delete elements at the end
dato = amigos.pop()
// delete elements at the beginning of my array
// dato = amigos.shift()

console.log(dato, amigos)

// Partir el array en 2 arrays similar al [:] python
// slice no modifica el array original
let mySlice = amigos.slice(0, 2);
console.log(mySlice);