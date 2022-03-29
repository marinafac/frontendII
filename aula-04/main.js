// DOM Document Object Model | Documento que pega todo modelo do html e 
//transforma em objeto, dessa forma o js consegue alterar


// OBTER O ELEMENTO E ATRIBUIR COISAS
//console.log(document.getElementById('primeiroTitulo'));
//let tituloElemento = document.getElementById('primeiroTitulo')
//tituloElemento.style.color = 'red';
//console.log(document.getElementsByClassName('teste'))


//querySelector só devolve o primeiro elemento que encontrar
console.log(document.querySelector('.teste'))


//para retornar todos os elementos devemos usar querySelectorAll
console.log(document.querySelectorAll('h2'))

let tituloElemento = document.querySelector('#primeiroTitulo')
tituloElemento.style.color = 'red';
tituloElemento.style.fontSize = '72px';