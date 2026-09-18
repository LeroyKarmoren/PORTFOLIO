-- Criar o banco de dados
DROP DATABASE IF EXISTS sistema_login;

CREATE DATABASE sistema_login;


-- Usar o banco
USE sistema_login;


-- Criar a tabela de usuários
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL
);


-- Inserir usuários de teste
INSERT INTO usuarios (nome, email, senha)
VALUES
('adm', 'adm@senai', '123456'),
('Ana Clara', 'ana@senai', '123');


-- Ver os usuários cadastrados
SELECT * FROM usuarios;