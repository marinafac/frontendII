let escolhaUsuario = parseInt(prompt("1. Papel, 2. Tesoura, 3. Pedra"))
let escolhaBoot = parseInt (Math.random()*3+1)

switch (escolhaUsuario){
    case escolhaBoot === 3 :
        alert ("o usuário ganhou")
    break;
    case escolhaBoot === 2 :
       alert ("o boot ganhou")
    break;
    default:
        alert ("empate")
    break;


/*switch (escolhaUsuario === 1){
    case escolhaBoot === 3 :
        alert ("o usuário ganhou")
    break;
    case escolhaBoot === 2 :
       alert ("o boot ganhou")
    break;
    default:
        alert ("empate")
    break;
}

switch (escolhaUsuario === 2){
    case escolhaBoot === 3 :
        alert ("o boot ganhou")
    break;
    case escolhaBoot === 1 :
       alert ("o usuário ganhou")
    break;
    default:
        alert ("empate")
    break;
}

switch (escolhaUsuario === 3){
    case escolhaBoot === 2 :
        alert ("o usuário ganhou")
    break;
    case escolhaBoot === 1 :
       alert ("o boot ganhou")
    break;
    default:
        alert ("empate")
    break;
}*/



//    alert ("o boot ganhou");
 //   break;

 //   case escolhaBoot < escolhaUsuario:
 //   alert ("o usuário ganhou");
 //   break;

 //   default:
//        alert ("empate")
//}

console.log ("Jogada do Usuário" +escolhaUsuario)
console.log ("Jogada do Boot" +escolhaBoot)