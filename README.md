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

:small_blue_diamond: [Tecnologias Utilizadas](#tecnologias-utilizadas)

:small_blue_diamond: [Como rodar a aplicação](#como-rodar-a-aplicação-arrow_forward)

## Descrição do projeto 

<p align="justify">
  Projeto desenvolvido como desafio proposto pela [Pipo Saude](https://www.piposaude.com.br/) 

  Construção de uma solução que facilite o processo de inclusão de novos funcionários na cartela de benefícios do cliente.
</p>

## Funcionalidades
### Relacionados aos clientes
:heavy_check_mark: Cadastro de clientes - O sistema precisa estar apto para cadastrar os clientes da empresa. Para cadastrar um cliente, deve ser informado o nome do mesmo. 

:heavy_check_mark: Listar clientes cadastrados

:heavy_check_mark: Buscar cliente específico

:heavy_check_mark: Alterar dados de um cliente

:heavy_check_mark: Deletar determinado cliente

### Relacionados aos parceiros

:heavy_check_mark: Cadastro de parceiros a determinado cliente - O sistema precisa estar apto para cadastrar os parceiros que cada cliente oferece. Para cadastrar um parceiro, deve ser informado o nome do parceiro e o id do cliente ao qual está inserido. 

:heavy_check_mark: Listar parceiros cadastrados

:heavy_check_mark: Buscar determinado parceiro

:heavy_check_mark: Alterar dados de um parceiro

:heavy_check_mark: Deletar determinado parceiro de um cliente

### Relacionados aos beneficiários

:heavy_check_mark: Incluir beneficiarios a determinado parceiro - O sistema precisa estar apto para cadastrar os funcionarios do cliente aos seus parceiros ofertados. Para cada parceiro, são exigidos determinados dados: 

1. Plano de Saúde Norte Europa: cpf, nome, data de admissão e email.
2. Plano de Saúde Pampulha Intermédica: cpf, nome, data de admissão e endereço.
3. Plano Odontológico Dental Sorriso: cpf, nome, peso e altura.
4. Plano de Saúde Mental Mente Sã, Corpo São: cpf e horas meditadas no últimos 7 dias

Para todos os beneficiários é obrigatório também informar o nome do parceiro e o id do parceiro

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

## Tecnologias Utilizadas

:heavy_check_mark: [Node v16.14.2](https://nodejs.org/en/download/)

:heavy_check_mark: [Express v4.17.3](https://www.npmjs.com/package/express)

:heavy_check_mark: [Postgres v8.7.3](https://node-postgres.com/)

:heavy_check_mark: [ElephantSQL](https://www.elephantsql.com/)

:heavy_check_mark: [dotenv v16.0.0](https://www.npmjs.com/package/dotenv)

## Como rodar a aplicação :arrow_forward:

No terminal, clone o projeto: 

```
git clone https://github.com/fabifelicia/case-pipo.git
```

Utilize o npm install para instalar as dependências do projeto.

```
npm install
```
### Iniciando/Configurando o banco de dados

Para o banco de dados utilizei o ElephantSQL, um serviço de hospedagem de banco de dados PostgreSQL gratuito, que permite armazenar dados de forma estruturada  que podem ser facilmente acessados, gerenciados e atualizados.

Para isso, basta fazer o login na plataforma e criar uma nova instância. Após essa etapa, nomeia o projeto e escolhe o plano grátis (Tiny Turtle). Seleciona a região, que já vem configurada por default e clica em criar instância.

Após criação, abre-se a instância, copia a url disponibilizada e cola no projeto (arquivo .env)

No menu lateral, escolhe a opção Browser, que abre uma caixa de texto para inserir as queries. Nesse momento, deve-se criar as tabelas que estão no arquivo sql/init.sql, para que a aplicação funcione.

Em seguida, crie um arquivo .env, na raiz do seu projeto e insira as varíaveis de ambiente PORT=(porta que rodará a aplicação) e a CONNECTION_API=(string de conexão com banco de dados, copiada anteriormente)

Logo apos essas configuraçoes, inicie o projeto.

```
npm start

```
## Desenvolvedores/Contribuintes :octocat:

[<img src="https://avatars.githubusercontent.com/u/39680930?v=4" width=115><br><sub>Fabiana Barreto</sub>](https://github.com/fabifelicia)

Copyright :copyright: 2022 - Engenharia Pipo Saúde

[![CodeFactor](https://www.codefactor.io/repository/github/fabifelicia/case-pipo/badge)](https://www.codefactor.io/repository/github/fabifelicia/case-pipo)