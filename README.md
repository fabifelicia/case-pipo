<p align='center'>
  <img src='./src/assets/Logo – Pipo Saúde.svg'/> 
</p>

<h1 align='center'>

   Engenharia Pipo Saúde - Challenge
</h1>

<p align='center'>
  <img src='https://img.shields.io/npm/v/npm?color=green'/>
  <img src="https://img.shields.io/badge/node-v16.14.2-green"/>
  <img src="https://img.shields.io/badge/express-v4.17.3-green"/>
  <img src="https://img.shields.io/badge/pg-v8.7.3-yellow"/>
  <img src="https://img.shields.io/badge/dotenv-v16.0.0-yellow"/>
  <img src="https://img.shields.io/badge/status-concluido-green"/>
</p>

> Status do Projeto: :heavy_check_mark: (concluído - aberto a melhorias)
## Tópicos

:small_blue_diamond: [Descrição do projeto](#descrição-do-projeto)

:small_blue_diamond: [Funcionalidades](#funcionalidades)

:small_blue_diamond: [Rotas da Requisição](#rotas-da-requisição)

:small_blue_diamond: [Pré-requisitos](#pré-requisitos)

:small_blue_diamond: [Como rodar a aplicação](#como-rodar-a-aplicação-arrow_forward)

## Descrição do projeto 

<p align="justify">
  Projeto desenvolvido como desafio proposto pela [Pipo Saúde](https://www.piposaude.com.br/). 

  Construção de uma solução que facilite o processo de inclusão de novos funcionários na cartela de benefícios do cliente.
</p>

## Funcionalidades
### Relacionados aos clientes
:heavy_check_mark: Incluir clientes

:heavy_check_mark: Listar clientes cadastrados

:heavy_check_mark: Buscar cliente específico

:heavy_check_mark: Alterar dados de um cliente

:heavy_check_mark: Deletar determinado cliente

### Relacionados aos parceiros

:heavy_check_mark: Incluir parceiros a determinado cliente

:heavy_check_mark: Listar parceiros cadastrados

:heavy_check_mark: Buscar determinado parceiros

:heavy_check_mark: Alterar dados de um parceiro

:heavy_check_mark: Deletar determinado parceiro de um cliente

### Relacionados aos beneficiários

:heavy_check_mark: Incluir baneficiarios a determinado parceiro

:heavy_check_mark: Listar beneficiários cadastrados

:heavy_check_mark: Buscar beneficiário

:heavy_check_mark: Alterar dados de um beneficiário

:heavy_check_mark: Deletar determinado beneficiário 


## Rotas da Requisição

### Adicionar clientes/parceiros/beneficiarios

`POST /clients`

`POST /partners`

`POST /users`

Response
`CREATED 201`

### Listar clientes/parceiros/beneficiarios

`GET /clients`

`GET /partners`

`GET /users`

Response
`OK 200`
### Buscar cliente/parceiro/beneficiario

`GET /clients/:id_client`

`GET /partners/:id_partner`

`GET /users/:id_user`

Response
`OK 200`

### Editar dados dos clientes/parceiros/beneficiarios

`PUT /clients/:id_client`

`PUT /partners/:id_partner`

`PUT /users/:id_user`

Response
`OK 200`
### Deletar clientes/parceiros/beneficiarios

`DLETE /clients/:id_client`

`DELETE /partners/:id_partner`

`DELETE /users/:id_user`

Response
`OK 200`

## Pré-requisitos

:warning: [Node](https://nodejs.org/en/download/)

...

Liste todas as dependencias e libs que o usuário deve ter instalado na máquina antes de rodar a aplicação 

## Como rodar a aplicação :arrow_forward:

No terminal, clone o projeto: 

```
git clone https://github.com/
```

... 

Utilize o npm install para instalar as dependências do projeto.

 ```
npm install

```
Em seguida, defina no arquivo .env, na raiz do seu projeto (string de conexão com banco de dados e porta utilizada)

Logo apos essas configuraçoes, inicie o projeto.

```
npm start

```

## Desenvolvedores/Contribuintes :octocat:

| [<img src="https://avatars.githubusercontent.com/u/39680930?v=4" width=115><br><sub>Fabiana Barreto</sub>](https://github.com/fabifelicia) |

Copyright :copyright: 2022 - Engenharia Pipo Saúde

[![CodeFactor](https://www.codefactor.io/repository/github/fabifelicia/case-pipo/badge)](https://www.codefactor.io/repository/github/fabifelicia/case-pipo)