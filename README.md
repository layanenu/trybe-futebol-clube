<strong>Trybe Futebol Clube :soccer: </strong>

<strong>:wavy_dash: Sobre</strong>

O  Trybe Futebol Clube (TFC) é um site informativo sobre partidas e classificações de futebol. Foi um dos projetos avaliativos do módulo de back-end da Trybe.

O Frontent já veio pronto e o objetivo foi desenvolver uma API (utilizando o método TDD) e também integrar - através do docker-compose - as aplicações para que elas funcionem consumindo um banco de dados. A modelagem do banco de dados foi feita através do Sequelize. 

<strong>:wavy_dash: Layout</strong>

https://user-images.githubusercontent.com/99842422/225306160-029a2575-767e-4e5e-9f67-96a23cdbcf1f.mov

<br />

<details>
  <summary><strong> Legenda </strong></summary><br />

  * Classificação: posição na classificação;
  * Time: nome do time;
  * P: total de pontos;
  * J: total de jogos;
  * V: total de vitórias;
  * E: total de empates;
  * D: total de derrotas;
  * GP: gols marcados a favor;
  * GC: gols sofridos;
  * SG: saldo total de gols;
  * %: aproveitamento do time.

</details>

<details>
  <summary><strong> Stacks </strong></summary><br />

  * Node JS
  * Typescript
  * Express
  * Sequelize
  * MySQL
  * Docker
  * Mocha + Chai + Sinon

</details>

<details>
  <summary><strong> Bibliotecas </strong></summary><br />

  * `Joi`: validação do corpo das requisições
  * `JWT`: autenticação dos usuários logados
  * `bcrypt`: hashing e verificação das senhas armazenadas no banco de dados.

</details>

<details>
<summary><strong>🐳 Rodando com o Docker</strong></summary><br />

Obs: O seu docker-compose precisa estar na versão 1.29 ou superior.

Clone o repositório:
```bash
git clone git@github.com:layanenu/trybe-futebol-clube.git
```

Entre no diretório do projeto: 
```bash
cd trybe-futebol-clube
```
  
Entre no diretório app:
```bash
cd app
```
  
Suba a orquestração de containers:
```bash
docker-compose up --build -d
```
  
A aplicação poderá ser acessada através de: <br />
<br />
Front-end: 
```bash
localhost:3000
```

Back-end: 
```bash
localhost:3001
```
  
Credenciais para o login: <br />
<br />
Login: 
```bash
admin@admin.com
```
Senha: 
```bash
secret_admin
```
</details>
