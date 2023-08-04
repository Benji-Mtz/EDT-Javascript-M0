/**
 * Simple Async - Await
 */
const urlComments = "https://jsonplaceholder.typicode.com/comments"
const urlPhotos = "https://jsonplaceholder.typicode.com/photos"


// const consultarAPI = async () => {

//     const respuesta = await fetch(url);
//     const resultado = await respuesta.json()
//     resultado.forEach(comentario => {
//         console.log(comentario);
//     });
// }

/**
 * Multiples Async - Await
 */

// Aqui hay problemas de performance porque se bloquea la consulta2

const consultarAPI = async () => {

    const inicio = performance.now()

    const respuesta = await fetch(urlComments);
    const resultado = await respuesta.json()
    console.log(resultado)

    console.log('Iniciando 2da consulta');

    const respuesta2 = await fetch(urlPhotos);
    const resultado2 = await respuesta2.json()
    console.log(resultado2)

    const fin = performance.now()

    console.log(`Ejecucion PRIMER async ${fin - inicio} ms`);
}
consultarAPI()


// Resolvemos el problema con Promesas y Async - Await / en paralelo

const consultarAPI2 = async () => {

    const inicio = performance.now()

    const [respuesta1, respuesta2] = await Promise.all([fetch(urlComments), fetch(urlPhotos)])
    const resultado = await respuesta1.json()
    const resultado2 = await respuesta2.json()

    console.log(resultado);
    console.log(resultado2);

    const fin = performance.now()

    console.log(`Ejecucion SEGUNDO async ${fin - inicio} ms`);
}
consultarAPI2()