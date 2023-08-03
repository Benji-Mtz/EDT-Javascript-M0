/**
 * SCOPE de las variables o alcance
 */

let nombre = "Alexys"

nombre = "Juan"

const saludar = function (){
    let nombre = "Benji Mtz" // let o const dentro del la fn() tiene alcance local
    // nombre = "otro nombre"  // sin let afectamos nombre fuera de la fn()
    console.log(`Hola ${ nombre }`) 
}

console.log(nombre); // Juan alcance global

saludar()