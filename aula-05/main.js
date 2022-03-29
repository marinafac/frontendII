//let titleReference = document.querySelector('#teste');

// Adicionar classe
//titleReference.classList.add('main-title');

let mainMenuReference = document.querySelector("#mainMenu")

//OP 01
//Adicionar função
//function openMenu (){

//    mainMenuReference.classList.add('main-menu-opened');

//}

//Remover função
//function closeMenu(){

//    mainMenuReference.classList.remove('main-menu-opened')
//}

//OP 02
//Mesma coisa de antes, só que em uma função só
//function manipuladorMenu(){

   // if(mainMenuReference.classList.contains('main-menu-opened') ){

   //     mainMenuReference.classList.remove('main-menu-opened')

   // }else{
   //     mainMenuReference.classList.add('main-menu-opened');
  //  }

//}

//OP 03
// Faz a mesma coisa, mas com apenas o TOGGLE
function manipuladorMenu(){

    mainMenuReference.classList.toggle('main-menu-opened')

}