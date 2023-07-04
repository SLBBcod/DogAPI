const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all';
// `https://dog.ceo/api/breed/${dog}/images/random`
const catAPI = 'https://api.thecatapi.com/v1/breeds'

const select = document.getElementById('select')  //Criação de uma variável chamada select, ela vai pegar o elemento do html por ID, para usar no Select
const imagem = document.getElementById('dog_img') //Criação de uma variável chamada imagem, ela vai pegar o elemendo do html por ID, para usar como imagem.
const select2 = document.getElementById('select2')
const imagem2 = document.getElementById('cat_img')

async function lista() {    // Criamos uma função para retornar uma lista com os OBJETOS com as raças, retornando também o VALOR(VALUE).
    const response = await fetch(BREEDS_URL) // Usamos o FETCH para fazer isso, e armazenamos em uma variavel chamada resposta. (lembrando que passamos como parametro para o FETECH uma URL)
    const data = await response.json() // Criamos variavel chamada DATA e convertemos para JSON
    return data // Usamos o return para retornar os objetos do FETCH em JSON
}

async function listaCat() {
    const responseCat = await fetch(catAPI)
    const dataCat = await responseCat.json() // se der erro mudar nome de data para data2
    return dataCat
}


lista()
    .then(data => {
        const objRaca = data.message //Variavel para armazenar os OBJETOS (Quero pegar as KEYS do objeto) (VALUE É DIFERENTE DE KEY)
        const arrayRaca = Object.keys(objRaca) //Transformar as keys do OBJETO em ARRAY 

        arrayRaca.forEach((raca) => { // Criamos um laço de repetição com o forEach e passamos como parâmetros a variavel ''raca''
            const option = document.createElement('option') //Criamos uma variavel que CRIA OPÇÕES no HTML 
            option.value = raca //Aqui definimos que essa OPÇÃO vai receber o VALUE de ''raca''
            option.innerText = raca //Aqui definimos que essa OPÇÃO vai alterar o texto no HTML
            select.appendChild(option) //Aqui selecionamos o elemento filho

        })
    })


function pegadados() {
    listaCat()
        .then(dataCat => {
            const objRacaCat = dataCat
            const mapped = objRacaCat
                .map(function (item) {
                    return gatos = {
                        name: item.name,
                        img: item.reference_image_id

                    }

                })
            mapped.forEach((gatos) => {
                const option2 = document.createElement('option')
                option2.value = gatos.img
                option2.innerText = gatos.name
                select2.appendChild(option2)
                console.log(gatos)
            })
        })
}

pegadados()

function display(url) { //Criamos uma função chamada display, que vai receber uma URL como parametro
    fetch(url) //Usamos o FETCH para pegar a URL
        .then(data => { //Usamos o THEN para pegar os dados
            return data.json() //Usamos o RETURN para retornar os dados em JSON
        })
        .then(data => { //Usamos o THEN para pegar os dados
            imagem.src = data.message //Aqui definimos que a imagem vai receber o SRC da URL
        })
}

select.addEventListener('change', e => { //Criamos um select e usamos o EventListener para monitorar quando acontecer um evento. Parametros: Quando mudar "change" acontece um evento "e"
    let url = `https://dog.ceo/api/breed/${e.target.value}/images/random` // e = evento, target = alvo, value = valor do alvo. Quando um evento acontecer, e um alvo for escolhido, "retorna" o valor
    display(url) //E então, chamamos a função display, porque sempre que acontecer algo no select, ela precisa rodar.
})

select2.addEventListener('change', e => {
    let url = `https://api.thecatapi.com/v1/images/${e.target.value}`
    fetch(url).then(data => {
        return data.json()
    })
        .then(data => {
            imagem2.src = data.url
        })
})