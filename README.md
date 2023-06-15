<img src="./src/assets/logo.svg" width="200">

<p align="center">Desenvolvimento front-end com React do Projeto Levva Coins</p>

# Conteúdos

<!--ts-->

- [Sobre](#Sobre)
- [Features](#features)
- [Contratos API](#contratos-api)
  - [Login](#login)
  - [Create user](#create-user)
  - [Get user](#get-user)
  - [Update user](#update-user)
  - [Create category](#create-category)
  - [Get all categories](#get-all-categories)
  - [Create transaction](#create-transaction)
  - [Get all transactions](#get-all-transactions)
- [About me](#about-me)

<!--te-->

## Sobre

O Levva Coins é um projeto desenvolvido no programa Newbies da Levva, trata-se de um controle pessoal de finanças que cadastra transações de entrada e saída, totaliza em cards e apresenta os detalhes das transações em uma tabela paginada. Após cumprir as trilhas de conhecimentos de back-end (C# .Net) e front-end(React), com orientação de Marcelo Pinheiro, Sidney Borges, Jemima Luz e Lucas Alves, os participantes do Newbie foram desafiados a realizar a intregação das duas partes e desenvolver 3 tarefas: criar uma busca por transações/categorias; retornar todos os dados de uma nova categoria ao ser cadastrada; retornar todos os dados de uma nova transação ao ser cadastrada.

## Features

### Acesso

    /login

Usuário acessa aplicação com email e senha para acesso as rotas autenticadas.

### Cadastro

    /new-account

Realiza cadastro de novos usuários.

### Home

    /home

Usuário consegue visualizar entradas e saída da conta, além de ter acesso aos modais de Nova Categoria e Nova Transação, onde pode criar novas entradas e saídas, ao modal do Avatar, em que é possivel fazer o logout da conta e a barra de busca, que retorna as transações e categorias do banco de dados.

## Contratos API

### Login

#### Endpoint

    /auth

#### Method

    POST

#### Request

    Body:
    {
        "email": "email@email.com",
        "password": "123456"
    }

    Headers:
    N/A

#### Response 200

    Body:
    {
        "id": "uuid-v4",
        "email": "email@email.com"
        "token": "bearer.token",
        "avatar": "https://images.com/image1"
    }

    Headers:
    N/A

#### Response 401

    Body:
    {
        "hasError": "true",
        "email": "Usuário ou senha
        inválidos."
    }

    Headers:
    N/A

### Create User

#### Endpoint

    /new-account

#### Method

    POST

#### Request

    Body:
    {
        "email": "email@email.com",
        "password": "123456"
    }

    Headers:
    N/A

#### Response 200

    Body:
    {
        "name": "Jhon Doe",
        "email": "email@email.com",
        "password": "123456",
        "avatar": "https://images.com/image1"
    }

    Headers:
    N/A

#### Response 201

    Body:
    N/A

    Headers:
    N/A

#### Response 400

    Body:
    {
        "hasError": true,
        "message": "Esse e-mail já existe."
    }

### Get user

#### Endpoint

    /user/:userId

#### Method

    GET

#### Request

    URL Param:
    userId (uuid-v4)

    Body:
    N/A

    Headers:
    {
        "authorization": "Bearer bearer.
        token"
    }

#### Response 200

    Body:
    {
        "id": "uuid-v4",
        "name": "Jhon Doe",
        "email": "email@email.com",
        "avatar": "https://images.com/image1"
    }

    Headers:
    N/A

#### Response 201

    Body:
    N/A

    Headers:
    N/A

#### Response 400

    Body:
    {
        "hasError": true,
        "message": "Esse usuário não existe."
    }

#### Response 401

    Body:
    {
        "hasError": true,
        "message": "Usuário não
        autenticado."
    }

### Update user

#### Endpoint

    /user/:userId

#### Method

    PUT

#### Request

    URL Param:
    userId (uuid-v4)

    Body:
    {
        "avatar": "https://images.com/image1",
        "name": "Jhon Doe",
    }

    Headers:
    {
        "authorization": "Bearer
        bearer.token"
    }

#### Response 204

    Body:
    N/A

    Headers:
    N/A

#### Response 201

    Body:
    N/A

    Headers:
    N/A

#### Response 400

    Body:
    {
        "hasError": true,
        "message": "Esse usuário não existe."
    }

#### Response 401

    Body:
    {
        "hasError": true,
        "message": "Usuário não
        autenticado."
    }

### Create category

#### Endpoint

    /category

#### Method

    POST

#### Request

    Body:
    {
        "description": "food"
    }

    Headers:
    {
        "authorization": "Bearer
        bearer.token"
    }

#### Response 201

    Body:
    N/A

    Headers:
    N/A

#### Response 400

    Body:
    {
        "hasError": true,
        "message": "Já existe uma categoria com esse nome."
    }

#### Response 401

    Body:
    {
        "hasError": true,
        "message": "Usuário não
        autenticado."
    }

### Get all categories

#### Endpoint

    /category

#### Method

    GET

#### Request

    N/A

    Headers:
    {
        "authorization": "Bearer
        bearer.token"
    }

#### Response 200

    Body:
    [
        {
            "id": "uuid-v4",
            "description": "Coffee"
        },
        {
            "id": "uuid-v4",
            "description": "Food"
        },
        {
            "id": "uuid-v4",
            "description": "Home"
        }
    ]

    Headers:
    N/A

#### Response 401

    Body:
    {
        "hasError": true,
        "message": "Usuário não
        autenticado."
    }

### Create transaction

#### Endpoint

    /transaction

#### Method

    POST

#### Request

    {
        "description": "Pizza with friends",
        "amount": 100,
        "type": "Deposit",
        "transactionId": guid,
        "category": {
            "categoryId": guid,
            "description": "food"
        },
        "createdAt": "date"
    }

    Headers:
    {
        "authorization": "Bearer
        bearer.token"
    }

#### Response 201

    Body:
    {
        "description": "Pizza with friends",
        "amount": 100,
        "type": "Deposit",
        "transactionId": guid,
        "category": {
            "categoryId": guid,
            "description": "food"
        },
        "createdAt": "date"
    }

    Headers:
    N/A

#### Response 400

    Body:
    {
        "hasError": true,
        "message": "Essa transação está com os parâmetros inválidos. São aceitos valores positivos e tipo entrada/saída."
    }

#### Response 401

    Body:
    {
        "hasError": true,
        "message": "Usuário não
        autenticado."
    }

### Get all transactions

#### Endpoint

    /transaction

#### Method

    GET

#### Request

    N/A

    Headers:
    {
        "authorization": "Bearer
        bearer.token"
    }

#### Response 200

    Body:
    [
       {
        "description": "Pizza with friends",
        "amount": 100,
        "type": "Deposit",
        "transactionId": guid,
        "category": {
            "categoryId": guid,
            "description": "food"
        },
        "createdAt": "date"
    },
    {
        "description": "Hamburguer com namorado",
        "amount": 50,
        "type": "Deposit",
        "transactionId": guid,
        "category": {
            "categoryId": guid,
            "description": "food"
        },
        "createdAt": "date"
    }
    ]

    Headers:
    N/A

#### Response 401

    Body:
    {
        "hasError": true,
        "message": "Usuário não
        autenticado."
    }

## About me

### Thaysa Zooby

| Autora                                  | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| :-------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="./src/assets/ThaysaFoto.jpg"> | Oie, sou Thaysa, Newbie na Levva, cursando pós-graduação em Engenharia de Software, comunicadora social e especialista em Direitos Humanos. Vivo em Recife, sou mãe de um menino chamado Gabo, adoro aprender coisas novas, no momento estou aprendendo a surfar e migrando minha carreira da área de comunicação para a tecnologia. Tenho formação em desenvolvimento back-end Nodejs pela Reprograma e algumas outras formações em front-end também. |
