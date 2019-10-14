# Teste SysCoin
O projeto pode ser encontrado [aqui](https://desolate-ocean-41305.herokuapp.com/provasyscoin)
<br>Deve ser passado "user" e "password" como parâmetros
### Para executar este projeto localmente, siga os passos abaixo:
<br>Instalar [nodemon](https://github.com/remy/nodemon), para fazer monitoramento do servidor em node.js
<br><code>sudo npm install -g nodemon</code><br>
<br>Instalar [restify](https://github.com/restify/node-restify), framework do node.js, para trabalhar com as rotas rest
<br><code>sudo npm install restify</code><br>
<br>Instalar [restify errors](https://github.com/restify/node-restify), para trabalhar com as respostas de erro das requisições http
<br><code>sudo npm install restify-errors</code><br>
<br>Instalar o driver para o banco que vai ser usado, no caso, o mysql 
<br><code>sudo npm install mysql</code><br>
<br>Instalar [knex](https://github.com/knex/knex), módulo para acessar o MySql
<br><code>sudo npm install knex --save mysql</code><br>

Ou pode ser instalado tudo de uma vez, depois de instalar o nodemon, com o seguinte comando: 
<br><code>sudo npm i --save restify restify-errors knex mysql</code><br>
<br>Após instalar todas as dependências, basta clonar este repositório (<code>git clone https://github.com/markinlimac/syscointest.git</code>) e executar o projeto (<code>nodemon index.js</code>).
<br>Para acessar o projeto, basta acessar o localhost na porta 8080 e usar a rota /provasyscoin, passando "user" e "password" como parâmetros.
<br><br> Este repositório contém um arquivo chamado "script.sh", que ao ser executado, ele instala todas as dependências automaticamente. Para executar, dê permissão de execução para o arquivo <code>sudo chmod +x script.sh</code>, e depois execute com <code>./script.sh</code>     