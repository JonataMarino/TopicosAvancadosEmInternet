function consultar()
{
    let codigo = document.getElementById('codigo').value;

    //URL da API 
    let apiUrl = `http://localhost:3000/api/consultar/${codigo}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let resultadoDiv = document.getElementById('resultado');
            resultadoDiv.innerHTML = `
            <h3>${data[0].nome}</h3>
            <p>${data[0].email}</p>
            <p>${data[0].telefone}</p>`;
           
        })
        .catch(error => {
            console.log('Ocorreu um erro:', error);
        });
       
}