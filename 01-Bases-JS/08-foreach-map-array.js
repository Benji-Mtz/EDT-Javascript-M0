/**
 * Arrays - Ciclos
 */

// Foreach neceita una funcion como parametro

let amigos = ["Benji","Pedro", "Paco", "Pablo"];

// amigos.forEach(function (amigo){
//     console.log(amigo);
// })

// forEach No modifica el arreglo original
let dato = amigos.forEach(amigo => console.log(`Hola ${amigo}`))
console.log(amigos)

// map Si modifica el arreglo original
let newAmigos = amigos.map(amigo => `Hola ${amigo}`)

console.log(newAmigos)
