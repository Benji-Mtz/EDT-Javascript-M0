// Eventos del DOM - Inputs

const inputNombre = document.querySelector('.nombre')

inputNombre.addEventListener('input', function (e) {
    console.log(e.target.value)
})

const inputPassword = document.querySelector('.password');
inputPassword.addEventListener('input', funcionPassword);

function funcionPassword(e) {
    inputPassword.type = 'text'

    setTimeout(() => {
        inputPassword.type = 'password'
    }, 100);
}

const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    let nombre = document.querySelector('.nombre').value
    let password = document.querySelector('.password').value

    const alertaPrevia = document.querySelector('.alerta')
    if (alertaPrevia) {
        alertaPrevia.remove()
    }

    const alerta = document.createElement('DIV')
    alerta.classList.add('alerta', 'segunda-clase')



    if (nombre === '' || password === '') {
        alerta.textContent = 'Todos los campos son obligatorios'
        alerta.classList.add('error')
    } else {
        alerta.textContent = 'Todo bien ...'
        alerta.classList.add('exito')
    }

    // Mostramos la alerta
    formulario.appendChild(alerta);

})