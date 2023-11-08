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

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});