function consultar()
{
    let cep = document.getElementById('cep').value;

    //URL DA API VIAcep
    let apiURL= `https://viacep.com.br/ws/${cep}/json/`;

    fetch(apiURL)
    .then(response => response.json()).
    then(data => {
        console.log(data);
        let resultadoDiv = document.getElementById('resultado');
        resultadoDiv.innerHTML = `<h3>${data.localidade}</h3>
        <p>${data.logradouro}</p>
        <p>${data.uf}</p>`;
    })
    .catch(error => {
        console.log('Ocorreu um erro: ', error);
    });
}