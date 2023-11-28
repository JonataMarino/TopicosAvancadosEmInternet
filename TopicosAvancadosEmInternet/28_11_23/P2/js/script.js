function Consultar() {
    let nomePokemon = document.getElementById('nomePokemon').value;
    let apiURL = `https://pokeapi.co/api/v2/pokemon/${nomePokemon}`;
    let imgURL = ``;
    fetch(apiURL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            let pokemonNome = data.name;
            let pokemonImagem = data.sprites.front_default;

            atualizarTabela(pokemonNome, pokemonImagem);
        })
        .catch(error => {
            console.error(`Ocorreu um erro: ${error}`);
        });
}

function atualizarTabela(nome, imagemUrl) {

    let tabela = document.getElementById('tabelaPokemon');
    let novaLinha = tabela.insertRow();

    
    let celulaNome = novaLinha.insertCell(0);
    let celulaImagem = novaLinha.insertCell(1);
    celulaNome.textContent = nome;


    let imagem = document.createElement('img');
    imagem.src = imagemUrl;
    celulaImagem.appendChild(imagem);
}
