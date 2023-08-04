// Eventos del DOM - clicks

const heading = document.querySelector('.heading')
// heading.addEventListener('click', () => {
//     console.log("Diste clic en el heading");
// })

heading.addEventListener('click', clickHeading)

function clickHeading() {
    heading.textContent = 'Nuevo Heading al dar click'
}

const enlaces = document.querySelectorAll('.navegacion a')
enlaces.forEach((enlace, index) => {
    enlace.addEventListener('click', () => {
        console.log(`Diste click en el enlace ${index + 1}`)
    })
})