const restify = require('restify');
const errs = require('restify-errors');

const server = restify.createServer({
  name: 'myapp',
  version: '1.0.0'
});

var knex = require('knex')({
  client: 'mysql',
  connection: {
    host : 'us-cdbr-iron-east-05.cleardb.net',
    user : 'b4eb14460dd0e2',
    password : '7839a54f',
    database : 'heroku_134b9f7af491cc5'
  }
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.get('/provasyscoin', (req, res, next) =>  {
  
  knex('SysCoin').then((dados) => {
    if('"'+dados[0].user+'"' == req.query.user && '"'+dados[0].password+'"' == req.query.password){
      knex('SysCoin').select('mensagem').where({user: dados[0].user}).then((mensagem) => res.send(mensagem[0]));
    } else {
      knex('SysCoin').select('mensagem').where({user: dados[1].user}).then((mensagem) => res.send(mensagem[0]));
    }
  }, next)
  
});

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});