const express = require('express');
const app = express();
const port = 3000;
const bodyPArser = require('body-parser');
const mysql = require('mysql')

app.use(bodyPArser.json());
app.use(bodyPArser.urlencoded({extended: true}));

app.use((req, res, next) =>{
    res.header('Acess-Control-Allow-Origin', '*'); //asterisco libera qqer rota por n ter endereco (ip ou host)
    res.header('Acess-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Acess-Control-Allow-Headers', 'Content-Type, Authorization');
})

//configuracao mySql

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'projetoNodeAPI'
})

db.connect((err) =>{
if (err) {
    throw err;
}
console.log('Conectado ao Banco de Dados mySql')
});

db.end();

app.post('/api/dados', (req, res) => {
    const  {nome, email} = req.body;
    const INSERT_DATA = `INSERT INTO USUARIO (NOME, EMAIL), VALUES ('${nome}'), ('${email}');`;

    db.query(INSERT_DATA, (err, result) =>{
        if(err)
        res.status(500).send('Erro ao salvar dados')
        else
        res.status(201).send('Dados salvos com sucesso')
    })
})



app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});


/*

app.get('/api/exemplo', (req, res) => {
    res.json({ mensagem: 'API criada em Javascript'});
});
*/
