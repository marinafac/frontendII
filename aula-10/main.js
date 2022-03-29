let botaoCriarContaReferencia = document.querySelector("#botaoCriarConta")
let inputNomeReferencia = document.querySelector("#inputNome")
let inputIdadeReferencia = document.querySelector ("#inputIdade")
let inputTermosReferencia = document.querySelector("#inputTermos")
/* Pegar inputs de formulário que sejam radio ou section*/
let inputTipoPessoa = document.getElementsByName ("pessoa")
let inputObservacoesReferencia = document.querySelector("#inputObservacoes")

let usuario = {}


botaoCriarContaReferencia.addEventListener("click", function (event){

    event.preventDefault();

    usuario.nome = inputNomeReferencia.value
    /* O Number transforma a string em número */
    usuario.idade = Number (inputIdadeReferencia.value) + 5
        /* O .checked é para inputs de seleção*/
    usuario.termos = inputTermosReferencia.checked


    for (let tipo of inputTipoPessoa){

    /* Ele ja entende que o .checked é true*/
        if(tipo.checked){

            usuario.inputTipoPessoa = tipo.value
        }

      /* o trin() elimina espaços antes e depois de começar o texto */   
        usuario.observacoes = inputObservacoesReferencia.value.trin()
        
    }

    if(usuario.idade < 14){

        alert("Não é possível cadastrar")
    }

 
    console.log(usuario)


})