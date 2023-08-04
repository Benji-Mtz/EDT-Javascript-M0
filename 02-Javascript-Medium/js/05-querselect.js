
const heading = document.querySelector('.heading')
console.log(heading.textContent)
console.log(heading.tagName)
console.log(heading.classList)
console.log(heading.id)

/**
 * Manipulando Html con JS
 */

heading.textContent = "Un nuevo Heading"
console.log(heading.textContent);

const inputNombre = document.querySelector('#nombre')
inputNombre.value = "un valor por default"

const enlaces = document.querySelectorAll('.navegacion a')
enlaces.forEach((enlace, index) => enlace.textContent = `Enlace${index + 1}`)