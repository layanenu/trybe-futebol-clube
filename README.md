<strong>Trybe Futebol Clube :soccer: </strong>

<strong>:wavy_dash: Sobre</strong>

O  Trybe Futebol Clube (TFC) é um site informativo sobre partidas e classificações de futebol. Foi um dos projetos avaliativos do módulo de back-end da Trybe.

O Frontent já veio pronto e o objetivo foi desenvolver uma API (utilizando o método TDD) e também integrar - através do docker-compose - as aplicações para que elas funcionem consumindo um banco de dados. A modelagem do banco de dados foi feita através do Sequelize. 

No time de desenvolvimento do TFC, seu squad ficou responsável por desenvolver uma API (utilizando o método TDD) e também integrar - através do docker-compose - as aplicações para que elas funcionem consumindo um banco de dados.

Nesse projeto, você vai construir um back-end dockerizado utilizando modelagem de dados através do Sequelize. Seu desenvolvimento deve respeitar regras de negócio providas no projeto e sua API deve ser capaz de ser consumida por um front-end já provido nesse projeto.

Para adicionar uma partida é necessário ter um token, portanto a pessoa deverá estar logada para fazer as alterações. Teremos um relacionamento entre as tabelas teams e matches para fazer as atualizações das partidas.

O seu back-end deverá implementar regras de negócio para popular adequadamente a tabela disponível no front-end que será exibida para a pessoa usuária do sistema.

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

REQUISITOS

Fluxo 1: Teams (Times)
1 - Desenvolva em /app/backend/src/database nas pastas correspondentes, uma migration e um model para a tabela de times
2 - (TDD) Desenvolva testes que cubram no mínimo 5 por cento dos arquivos em /app/backend/src, com um mínimo de 7 linhas cobertas
3 - Desenvolva o endpoint /teams no back-end de forma que ele possa retornar todos os times corretamente
4 - (TDD) Desenvolva testes que cubram no mínimo 10 por cento dos arquivos em /app/backend/src, com um mínimo de 19 linhas cobertas
5 - Desenvolva o endpoint /teams/:id no back-end de forma que ele possa retornar dados de um time específico

Fluxo 2: Users e Login (Pessoas Usuárias e Credenciais de acesso)
6 - Desenvolva em /app/backend/src/database nas pastas correspondentes, uma migration e um model para a tabela de pessoas usuárias
7 - (TDD) Desenvolva testes que cubram no mínimo 15 por cento dos arquivos em /app/backend/src, com um mínimo de 25 linhas cobertas
8 - Desenvolva o endpoint /login no back-end de maneira que ele permita o acesso com dados válidos no front-end
9 - (TDD) Desenvolva testes que cubram no mínimo 20 por cento dos arquivos em /app/backend/src, com um mínimo de 35 linhas cobertas
10 - Desenvolva o endpoint /login no back-end de maneira que ele não permita o acesso com um email não cadastrado ou senha incorreta no front-end
11 - (TDD) Desenvolva testes que cubram no mínimo 30 por cento dos arquivos em /app/backend/src, com um mínimo de 45 linhas cobertas
12 - Desenvolva um middleware de validação para o token, verificando se ele é válido, e desenvolva o endpoint /login/role no back-end de maneira que ele retorne os dados corretamente no front-end

Fluxo 3: Matches (Partidas)
13 - Desenvolva em /app/backend/src/database nas pastas correspondentes, uma migration e um model para a tabela de partidas
14 - (TDD) Desenvolva testes que cubram no mínimo 45 por cento dos arquivos em /app/backend/src, com um mínimo de 70 linhas cobertas
15 - Desenvolva o endpoint /matches de forma que os dados apareçam corretamente na tela de partidas no front-end
16 - Desenvolva o endpoint /matches de forma que seja possível filtrar somente as partidas em andamento, e também filtrar somente as partidas finalizadas, na tela de partidas do front-end
17 - Desenvolva o endpoint /matches/:id/finish de modo que seja possível finalizar uma partida no banco de dados
18 - Desenvolva o endpoint /matches/:id de forma que seja possível atualizar partidas em andamento
19 - (TDD) Desenvolva testes que cubram no mínimo 60 por cento dos arquivos em /app/backend/src, com um mínimo de 80 linhas cobertas
20 - Desenvolva o endpoint /matches de modo que seja possível cadastrar uma nova partida em andamento no banco de dados
21 - Desenvolva o endpoint /matches de forma que não seja possível inserir uma partida com times iguais nem com um time que não existe na tabela de times

Fluxo 4: Leaderboards (Placares)
