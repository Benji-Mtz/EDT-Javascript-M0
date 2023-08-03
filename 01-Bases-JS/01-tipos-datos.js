/**
 * Tipos de datos
 */

// Number
console.log(typeof 50.9)
// String
console.log(typeof "Benji")
// Boolean
console.log(typeof true)
// Objeto Array
console.log(typeof ["benji", "Mtz","Flores"])
// Objeto
alumno = {
    nombre: "Benji",
    apellido: "Martinez"
}
console.log(typeof alumno)

// Nulo (objeto)
console.log(typeof null)

// Nulo (objeto)
console.log(typeof undefined)


/**
 * Variables
 */

// Declaración
let alumno2 = "Benji Martinez Flores"

// Asignación por referencia
let profesor = "benji"
let otherAlumn = profesor

profesor = "Alvaro"

console.log(profesor, otherAlumn)
// Constantes solo asignacion en un paso y no asignación
const NOMBRE_EMPRESA = "BenjiEmpresa";

