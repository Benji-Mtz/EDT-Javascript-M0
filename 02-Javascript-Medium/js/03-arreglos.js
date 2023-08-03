/**
 * Array Methods
*/
const tecnologias = ['Node.js', 'Golang', 'Javascript', 'Java', 'Kubernetes'];

// Añadir elementos al array 

// tecnologias.push('GraphQL') // Añade elementos al final
// tecnologias.unshift('GraphQL') // Añadir elementos al inicio
// const nuevoArreglo = ['GraphQL', ...tecnologias, 'GraphQL'] // Añadir elementos sin MUTAR el arreglo original

// Eleminiar elementos del array

// tecnologias.pop() // Eliminar del final
// tecnologias.shift() // Elimina del inicio
// tecnologias.splice(2, 2) // splice(indice_inicio, num_elem)
// const nuevoArray = tecnologias.filter(function (tech) {
//     return tech !== 'Javascript';
// })

// Reemplazar del array

// tecnologias[0] = 'GraphQL'
const nuevoArray = tecnologias.map(function (tech) {
    if (tech === 'Node.js') {
        return 'GraphQL'
    } else {
        return tech
    }
})

console.table(tecnologias);
console.table(nuevoArray);

/**
 * Array's Destructuring 
*/

const [var1, var2] = tecnologias;
console.log(var1, var2); // Node.js Golang

const [, , , , var5] = tecnologias;
console.log(var5); // Kubernetes

/**
 * Iterators
*/

// Foreach - Solo lista o accede o imprime valores, no crea arrays nuevos
const arrayForeach = tecnologias.forEach(function (tech) {
    return tech
})

// map - Crea un nuevo array con las iteraciones que edites
const arrayMap = tecnologias.map(function (tech) {
    return tech
})

console.log(arrayForeach, arrayMap) // (undefined, ['Node.js', 'Golang', 'Javascript', 'Java', 'Kubernetes'])

