let buttonReference = document.querySelector('#mainButton')
let userNameInputReference = document.querySelector('#userNameInput')

let contador = 0

// Event Listener de Click
buttonReference.addEventListener('click', function(event){

    document.querySelector('#mensagemSucesso').style.opacity = 1
    event.preventDefault()

})

// Event Listener de quando o Mouse ficar Sobre um elemento
userNameInputReference.addEventListener('mouseover', function(event){

    document.querySelector('#userNameDica').style.opacity = 1

})

// Event Listener de quando o Mouse não ficar ficar Sobre um elemento
userNameInputReference.addEventListener('mouseleave', function(event){

    document.querySelector('#userNameDica').style.opacity = 0

})


// Event Listener de KeyDown
userNameInputReference.addEventListener('keydown', function(event){

    console.log(contador++)
    console.log('digitou...')

})


// Detectar se o documento ja carregou
window.onload = function() {

    console.log('O documento está completamente carregado')

}