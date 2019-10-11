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
    res.send(dados);
  }, next)
  
});

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});