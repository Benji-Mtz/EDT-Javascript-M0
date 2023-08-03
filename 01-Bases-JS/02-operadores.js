/**
 * Operadores Unarios
 */

let a = 10

a++
a--

console.log(a)

let b = 5
let c = 8

// Operador ternario
let d = c > b ? "Es verdad" : "Es falso"

console.log(d)

// Type Coercion
let var1 = 521
let var2 = "perro"

let suma =  var1 + var2
let resta = var1 - var2

console.log(`${ suma } tipo: ${ typeof suma }`)
console.log(`${ resta } tipo: ${ typeof resta }`)