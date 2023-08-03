const producto = {
    nombre: "tablet",
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: 'Juan',
    premium: true
}

// Object.freeze(producto) - No deja modificarlo, añadir ni eliminar
// Object.seal(producto) - Modificar propiedades existentes,no añadir ni eliminar

// Reescribe el valor
producto.nombre = "Monitor Curvo"

// Si no existe, lo va a añadir
producto.imagen = "imagen.jpg"

// Elimina la propiedad "disponible"
// delete producto.disponible
console.table(producto)

/**
 * Destructuring
 */
const { nombre, precio, disponible } = producto
const { nombre: nombreCliente, premium } = cliente

console.log(nombre, precio, disponible)
console.log(nombreCliente, premium)

/**
 * Unir dos o mas objetos
 */

// const nuevoObjeto = Object.assign(producto, cliente) - NO
// El spread operator funciona pero sobreescribe la propiedad nombre del primer objeto
// const nuevoObjeto1 = { ...producto, ...cliente };
// console.log(nuevoObjeto1);

const nuevoObjeto2 = {
    producto: { ...producto },
    cliente: { ...cliente }
}
// Esto puede funcionar, no sobreescribe ni muta los objetos originales
console.log(nuevoObjeto2)