const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Aqui você pode especificar quais domínios têm permissão
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// Configuração do banco de dados MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bancoapi'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Conectado ao MySQL');
});

// Rota POST para receber e salvar os dados
app.post('/api/dados', (req, res) => {
    const { nome, email, telefone } = req.body;
    const INSERT_DATA_QUERY = `INSERT INTO usuario (nome, email, telefone) VALUES ('${nome}', '${email}', '${telefone}');`;
    
    db.query(INSERT_DATA_QUERY, (err, result) => {
        if (err) {
            res.status(500).send('Erro ao salvar os dados');
        } else {
            res.status(201).send('Dados salvos com sucesso');
        }
    });
});

app.put('/api/atualizar', (req, res) =>{
    const  {codigo, nome, email, telefone} = req.body;
    const UPDATE_DATA_QUERY = `update usuario SET nome = '${nome}', email = '${email}', telefone = '${telefone}' where codigo = ${codigo};`;

    db.query(UPDATE_DATA_QUERY, (err, result) =>{
    if(err){
        res.status(500).send('Erro ao atualizar os dados')
    }else{
         res.status(200).json({message:'Dados atualizados com Sucesso'})
    }
    });
});

app.delete('/api/excluir/:codigo', (req, res) =>{

    const codigo = req.params.codigo;
    
    const DELETE_DATA_QUERY = `DELETE FROM usuario WHERE codigo = ${codigo}`;

    db.query(DELETE_DATA_QUERY, (err, result) =>{
        if (err){
            res.status(500).send('Erro ao excluir os dados');
        }else{
            res.status(200).json({message: 'Dados excluídos com sucesso'});
        }
    });
});

app.get('/api/consultar/:codigo', (req, res) =>{

    const codigo = req.params.codigo;
    
    const SELECT_DATA_QUERY = `SELECT * FROM usuario WHERE codigo = ${codigo}`;

    db.query(SELECT_DATA_QUERY, (err, result) =>{
        if (err){
            res.status(500).send('Erro ao consultar os dados');
        }else{
            res.status(200).json(result);
        }
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});