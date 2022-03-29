let bodyReference = document.querySelector('body')
let changeClassButtonRefernece = document.querySelector('#changeClassButton')

//pegou item do HTML e add no JS
let mainTitleReference = document.querySelector('.mainTitle')

//adicionou na visualizacao do html, mas n no código
mainTitleReference.innerText = "Título do HTML"

function changeTheme() {

    bodyReference.classList.toggle('dark')

    if( bodyReference.classList.contains('dark') ) {

        changeClassButtonRefernece.innerText = 'mudar tema ☀️'

    } else {

        changeClassButtonRefernece.innerText = 'mudar tema 🌙'

    }

}
//let welcomeMessage = "seja bem vindo"
//let userName = "nome"
//let mainContentReference = document.querySelector ("#mainContent")

//mainContentReference.innerHTML =
//`
//<div class="item">
//<img src="./imagens/tiger.jpg">
//<h2>${welcomeMessage}</h2>
//<p>
//${userName}
//</p>
//</div>
//`

let mainContentReference = document.querySelector ("#exemploMainContent")
let posts = [
    {
        name: "nome",
        description: "descricao descricao",
        image: "https://www.chefbob.com.br/wp-content/uploads/2021/05/2021-05-12-como-deixar-os-gatos-mais-tranquilos.jpg"
    },
    {
        name: "nome 2",
        description: "descricao descricao 2",
        image: "https://www.chefbob.com.br/wp-content/uploads/2021/05/2021-05-12-como-deixar-os-gatos-mais-tranquilos.jpg"

    } 
]

for (let post of posts) {

    mainContentReference.innerHTML += 
    `
    <div class="item">
    <img src='${post.image}'>
    <h2>${post.name}</h2>
    <p>${post.description}</p>
    </div>
    `
}

console.log (post)


