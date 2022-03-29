let inputCepReference = document.querySelector('input')
let enderecoReference = document.querySelector('#logradouro')
let inputBairroReference = document.querySelector('#bairro')
let inputCidadeReference = document.querySelector('#cidade')
let inputEstadoReference = document.querySelector('#estado')
let inputDddReference = document.querySelector('#ddd')
let submitButtonReference = document.querySelector ('button')


submitButtonReference.addEventListener('click', event =>{

    event.preventDefault()

    //link com a API (https://viacep.com.br/)
    fetch (`https://viacep.com.br/ws/${inputCepReference.value}/json/`)
         .then(

        function(response){

            response.json().then(
                //outro jeito de declarar função / o mesmo de function (sucess){}
                sucess => {

                //pega o logradouro da API
                enderecoReference.value = sucess.logradouro
                inputBairroReference.value = sucess.bairro
                inputCidadeReference.value = sucess.localidade
                inputEstadoReference.value = sucess.uf
                inputDddReference.value = sucess.ddd

                    
            }
                )


        }
  
     )

})