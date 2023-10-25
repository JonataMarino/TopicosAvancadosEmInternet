let postId = 1;//'';
let apiUrl = `https://jsonplaceholder.typicode.com/posts/${postId}`;

//Configuração da requisição DELETE
const options = {
    method: 'DELETE',
};

//Realiza a requisição DELETE
fetch(apiUrl, options)
    .then (response => {
        console.log(response);
        if ( response.status == 200)
            console.log('Post excluído com sucesso.')
//        else if(response.status == 500)
//            console.log('pagina não encontrada')
        else
        console.log('erro ao excluir o post.')
        

        
    })
    .catch(error =>  {
        console.error('ERRO: ', error);
    })