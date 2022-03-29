
//let user = {

    //name: "João Paulo",
   // age: 32,
    //   birthDate: "22/02/2022",
//}

//for (let detail in user){


//console.log(user[detail]);
//}

//let userName = prompt ("Insira o seu nome")
//prompt ()

//console.log(userName)


// Exemplo Jokenpo
let escolhaUsuario = parseInt(prompt ("1.Papel, 2.Tesoura, 3. Pedra "))
let escolhaBoot = parseInt (Math.random()*3+1)

console.log(escolhaUsuario, escolhaBoot)

//=== é pra quando for comparar número e string

if (escolhaUsuario === 1){
    if(escolhaBoot === 1){
        alert ("empatou")
    }

    if(escolhaBoot === 2){
        alert ("o bor ganhou")
    }

    if(escolhaBoot === 3){
        alert ("o usuário ganhou")
    }
    
}

if (escolhaUsuario === 2){
    if(escolhaBoot === 1){
        alert ("o usuário ganhou")
    }

    if(escolhaBoot === 2){
        alert ("empate")
    }

    if(escolhaBoot === 3){
        alert ("o boot ganhou")
    }
    
}

if (escolhaUsuario === 3){
    if(escolhaBoot === 1){
        alert ("o boot ganhou")
    }

    if(escolhaBoot === 2){
        alert ("o usuário ganhou")
    }

    if(escolhaBoot === 3){
        alert ("empatou")
    }
    
}

console.log ("Jpgada do Usuário" +escolhaUsuario)
console.log ("Jogada do Boot" +escolhaBoot)