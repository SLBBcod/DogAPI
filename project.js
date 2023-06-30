const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all';
// `https://dog.ceo/api/breed/${dog}/images/random`


const select = document.querySelector('.breeds')



async function lista () {
  try {
    const response = await fetch(BREEDS_URL);

    if (!response.ok) {
      throw new Error ("Failed to fetch data")
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

lista().then (data => {
  const objRacas = data.message // o message é uma key da response, vai pegar o que tem dentro da key
  
  const arrayRacas = Object.keys(objRacas)  // Cria um array com as keys do objeto 
    

  arrayRacas.forEach( (racas) => {
    const option = document.createElement('option'); // option fica dentro do select, são os itens que você escolhe
    option.value = racas
    option.innerText = racas
    select.appendChild(option)
  })
  
})


