CREATE TABLE SysCoin(
  user varchar(255),
  password varchar(255),
  mensagem VARCHAR(255)
);

INSERT INTO SysCoin (user,password,) VALUES ("syscoin","meEscolhe");

http://xxx/provasyscoin?user="syscoin"&password="meEscolhe"
{
"mensagem": "Meu nome completo é xxx. Eu quero essa vaga!"
}
{
"mensagem": "Credenciais erradas."
}