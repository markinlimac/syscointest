const restify = require('restify');
const errs = require('restify-errors');

const server = restify.createServer({
  name: 'myapp',
  version: '1.0.0'
});

var knex = require('knex')({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'root',
    password : 'raposa_@1',
    database : 'syscoinTest'
  }
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.get('/provasyscoin', (req, res, next) =>  {
  
  knex('SysCoin').then((dados) => {
    if('"'+dados[0].user+'"' == req.query.user && '"'+dados[0].password+'"' == req.query.password){
      // var mensagem = Object.keys(dados[0])[2]; 
      // var valor = 
      // var saida = {
      // Object.values(dados[0])[2];
      // }
      // res.send(saida)
      res.send(Object.keys(dados[0])[2]+": "+Object.values(dados[0])[2]);
    } else {
      res.send(dados[1]);
    }
  }, next)
  
});

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});