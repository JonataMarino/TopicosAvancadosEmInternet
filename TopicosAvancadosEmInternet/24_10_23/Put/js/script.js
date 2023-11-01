function atualizar() {

    //DEFINA a ARL da API Jsonplaceholder para atualizar um post existente

    let numeroPostagem = document.getElementById('numeroPostagem').value;
    let textBoby = document.getElementById('textoBody').value;
    let textTitle = document.getElementById('textoTitle').value;

    //substitua o numero pelo post q deseja atualizar
    let apiUrl = `https://jsonplaceholder.typicode.com/posts/${numeroPostagem}`;  //<--

    //Dados atualizados do post
    let dadosAtualizados = {
        title: `${textTitle}`,
        body: `${textBoby}`
    };

    //Configuração da requisição PUT

    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            //Especifique o tipo de conteúdo como JSON
        },
        body: JSON.stringify(dadosAtualizados),
        //convertemos os dados em formato JSON
    };

    //Realize a requisição PUT
    fetch(apiUrl, options)
        .then(response => response.json())
        .then(data => {
            console.log("Post Atualizado", data);//Exibe os dados do post atualizado
            let divResultado = document.getElementById('resultado');
            divResultado.innerHTML = `<p>Postagem atualizada: ${data.title}</p>
                                        <p>${data.body}</p>`
            //exibe na div o valor atualizado
        })
        .catch(error => {
            console.error('Erro: ', error) //em caso de erro na requisição
        });
}