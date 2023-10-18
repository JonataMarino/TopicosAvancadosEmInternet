//dados enviados para a API
const novoPost = {
    userID: 1,
    id: 101,
    title: 'Meu novo post',
    body: 'este é o conteudo do meu novo post',
};

//URL da API JsonPlaceHolder para criação de posts
const url = 'https://jsonplaceholder.typicode.com/posts';

//Configuração da requisição
const options = {
    method: 'POST',
    body: JSON.stringify(novoPost),
    headers: {
        'Content-type': 'application/json',
    },
};

//Realiza a requisição do POST
fetch(url, options)
.then(response => {
if(!response.ok){
    throw new Error('Erro ao criar o POST');
}
return response.json();
})
.then(data => {
    console.log('post criado com sucesso: ', data);
})
.catch(error => {
    console.log('Erro: ',error);
});
