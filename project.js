const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all';
// `https://dog.ceo/api/breed/${dog}/images/random`

const select = document.getElementById('select')
const imagem = document.getElementById('dog_img')

async function lista (){    // Criamos uma função para retornar uma lista com os objeto com as raças 
   const response = await fetch(BREEDS_URL) // Fetch para fazer isso 
    const data = await response.json() // Converter para JSON
    return data // Usamos o return para retornar os objetos do FETCH
}

lista().then(data => {
    const objRaca = data.message //Variavel para armazenar os OBJETOS (Quero pegar as KEYS do objeto)
    const arrayRaca = Object.keys(objRaca) //Transformar as keys do OBJETO em ARRAY
    
    arrayRaca.forEach((raca) => { //
        const option = document.createElement('option')
        option.value = raca
        option.innerText = raca 
        select.appendChild(option)

    })

})

function display (url){
    fetch(url)
    .then(data => {
        return data.json()
    })
    .then(data => {
        imagem.src = data.message
    })

}

select.addEventListener('change', e => { //Criamos um select para monitorar quando acontecer um evento, quando mudar (change) acontece um evento (e)
    let url = `https://dog.ceo/api/breed/${e.target.value}/images/random` // e = evento, target = alvo, value = valor do alvo
    display(url)
})

