function consultar()
{
    let idPerson = document.getElementById('idPerson').value;

    //URL DA API VIAcep
    let apiURL= `https://rickandmortyapi.com/api/character/${idPerson}`;
  //  let imgURL = `https://rickandmortyapi.com/api/character/avatar/${idPerson}.jpeg`

    fetch(apiURL)
    .then(response => response.json()).
    then(data => {
        console.log(data);
        let resultadoDiv = document.getElementById('resultado');
        resultadoDiv.innerHTML = 
        `<h3>Nome: ${data.name}</h3>
        <p>Status: ${data.status}</p>
        <p>Espécie: ${data.species}</p>
        <p>Gênero: ${data.gender}</p>
        <img src="${data.image}" width="200" height="200">`;
        
        //<img src="${imgURL}" width="200" height="200">`;
    })
    .catch(error => {
        console.log('Ocorreu um erro: ', error);
    });
} //Nome, Status, Especie, Genero, Image