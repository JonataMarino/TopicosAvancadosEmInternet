/*fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        //console.log(data);
    data.forEach(user => {
     console.log(user.name);   
     document.getElementById("resultado").innerHTML += `<p>Nome : ${user.name}`;
     document.getElementById("resultado").innerHTML += `<p>email : ${user.email}<p>`;
     document.getElementById("resultado").innerHTML +=  `<p>Website :${user.website}<p>`;
     document.getElementById("resultado").innerHTML += `<p>Endereço : ${user.address.city}<p></br><hr>`;
    })
    })
    .catch(error => {
        console.log("erro na chamada da api", error)
}
)*/


fetch('https://jsonplaceholder.typicode.com/users ')
      .then(response => response.json())
      .then(data => {
            console.log(data);
                data.forEach(user => {

                    let tabelaCorpo = document.getElementById('tabela-corpo');

                    const row = tabelaCorpo.insertRow();
                    const cell1 = row.insertCell(0);
                    const cell2 = row.insertCell(1);
                    const cell3 = row.insertCell(2);
                    const cell4 = row.insertCell(3);

                    cell1.textContent = user.name;
                    cell2.textContent = user.address.city;
                    cell3.textContent = user.website;
                    cell4.textContent = user.email;
                   
                });
    })
    .catch(error => {
        console.log('Ocorreu um erro: ', error);
    })