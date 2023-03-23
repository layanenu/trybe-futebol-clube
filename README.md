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

<strong>:wavy_dash: Stacks utilizadas</strong>
<br />

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
 
Clone o projeto: <br />
`git clone git@github.com:layanenu/trybe-futebol-clube.git`

Entre no diretório do projeto: <br />
`cd trybe-futebol-clube`
  
Entre no diretório app: <br />
`cd app`
  
Suba a orquestração de containers: <br />
`docker-compose up --build -d`
  
A aplicação poderá ser acessada através de: <br />
`Front-end: localhost:3000`<br />
`Back-end: localhost:3001`
  
Credenciais para o login: <br />
`login: admin@admin.com`<br />
`senha: secret_admin` 
  
</details>
