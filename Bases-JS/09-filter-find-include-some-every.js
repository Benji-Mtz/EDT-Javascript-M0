/**
 * Filter
 */

let numeros = [15,10,50, 60, 65, 90, 25, 35];

let nuevoArray = []

numeros.map(
    num => {
        if (num >= 50) {
            nuevoArray.push(num)
        }
    }
)
console.log(nuevoArray);

// filter asume toda esa logica y retorna un arreglo como map

let datoFilter = numeros.filter(num => num >= 50)
console.log(datoFilter);

// find devuelve el primer valor que encuentre con alguna condición
 let datoFind = numeros.find( num => num % 2 === 1)
 console.log(datoFind)

//  include solo verifica si se incluye el dato exacto no acepta condiciones
let datoInclude = numeros.includes(15)
console.log(datoInclude)

//  some valida si un valor del array cumple slguna condición
let datoSome = numeros.some( num => num < 0)
console.log(datoSome)

//  every valida que todos y cada uno de los elementos cumpla alguna condición con uno que no, da falso
let datoEvery = numeros.every( num => typeof num === "number")
console.log(datoEvery)
