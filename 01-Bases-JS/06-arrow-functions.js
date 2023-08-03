/**
 * Funciones de flecha después del ES6
 */

const sumar = function (a, b) {
    return a + b;
}

const restar = function (c, d) {
    return c - d;
}

console.log(sumar(1, 2))
console.log(restar(2, 1))

const sumaFlecha = (a, b) => a + b
const restaFlecha = (a,b) => b - a

console.log(sumaFlecha(1, 2))
console.log(restaFlecha(2, 1))

const saludar  = (nombre) => `Hola ${nombre}, buen dia!`
console.log(saludar("Benji"))

const saludarFlecha = nombre => {
    if (typeof nombre === "string") {
        console.log(`Hola ${nombre}`);
    } else {
        console.error("Dato equivocado")
    }
}

saludarFlecha("Benjamin")
saludarFlecha(123)