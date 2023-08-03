const tecnologias = ['Node.js', 'Golang', 'Javascript', 'Java', 'Kubernetes'];
const numeros = [10, 20, 30]
let resultado;

const nuevoArray = tecnologias.map(tech => {
    if (tech === 'Node.js') {
        return 'GraphQL'
    } else {
        return tech
    }
})

const nuevoArray2 = tecnologias.filter(tech => tech !== 'Golang')

console.log(nuevoArray, nuevoArray2)

// Comprobar si un elemento existe en el array
// resultado = tecnologias.includes('GraphQL') // false

// Some - Devuelve true si almenos uno cumple la condición
// resultado = numeros.some(numero => numero > 15) // true

// Find - Devuelve el primer elemento que cumpla la condición
// resultado = numeros.find(numero => numero > 5) // 10

// Every - Retorn true o false si todos los elementos cumplen la condición
// resultado = numeros.every( numero => numero > 9) // true

// Reduce - numeros.reduce((sumador, elem_array) => elem_array + sumador, valorInicialSumador)
// resultado = numeros.reduce((total, numero) => numero + total, 0) // 60

tecnologias.forEach((tech, index) => console.log(index, tech))

console.log(resultado)

// For more information visit: https://doesitmutate.xyz/