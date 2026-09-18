const express = require('express');
const mysql = require('mysql2');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.static(__dirname));

const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'sistema_login'
});

db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar no banco de dados:', err.message);
    } else {
        console.log(' Conectado ao Banco de Dados "sistema_login" com sucesso!');
    }
});

// Rota ajustada para buscar pela coluna "email" do seu MySQL
app.post('/login', (req, res) => {
    const { usuario, senha } = req.body;

    const sql = 'SELECT * FROM usuarios WHERE email = ? AND senha = ?';

    db.query(sql, [usuario, senha], (err, results) => {
        if (err) {
            console.error('Erro na consulta ao banco:', err);
            return res.status(500).json({ 
                sucesso: false, 
                mensagem: 'Erro interno ao consultar o banco de dados.' 
            });
        }

        if (results.length > 0) {
            console.log(`[LOGIN APROVADO] Usuário "${usuario}" autenticado!`);
            return res.json({ sucesso: true });
        } else {
            console.log(`[LOGIN NEGADO] Tentativa inválida para "${usuario}".`);
            return res.json({ 
                sucesso: false, 
                mensagem: 'Usuário ou senha incorretos!' 
            });
        }
    });
});

app.listen(3000, () => {
    console.log(' Servidor rodando em: http://localhost:3000');
    console.log(' Acesse pelo link: http://localhost:3000/login.html');
});