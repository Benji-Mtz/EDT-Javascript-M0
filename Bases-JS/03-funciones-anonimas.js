/**
 * Funciones Anonimas
 * 1. Se pueden almacenar en variables
 * 2. Se pueden autoinvocar
 */

// 1.
let sumar = function (a, b, c) {
    return a + b + c;
}

console.log(typeof sumar) // function

let resultado = sumar(1, 2, 3)
console.log(resultado)


// 2.
// (function (a, b, c) {
//     console.log(a + b + c);
// }(2, 4, 5))
