// Adicione o campo avaliacao em todos os documentos da coleção e efetue alterações nesse campo.
// Para isso, escreva no arquivo desafio3.js quatro queries, nesta ordem:

// Crie uma query que inclua o campo avaliacao do tipo NumberInt e com o valor 0 em todos os documentos da coleção.
db.produtos.updateMany(
  {},
  {
    $set: {
      avaliacao: NumberInt(0),
    },
  }
);
// - o método updateMany() permite que vários documentos que satisfaçam o critério de filtro sejam alterados de uma única vez;
// - updateMany() recebe dois parâmetros: query (filtro) e projection (o que será alterado);
// - nesse caso não há necessidade de nenhum filtro porque queremos alterar todos os documentos;
// - operador $set altera o valor de um campo específico;
// - tipo NumberInt, referência documentação oficial Mongo:
// - https://docs.mongodb.com/manual/core/shell-types/#numberint

// Crie uma query que incremente o valor do campo avaliacao em 5 em todos os sanduíches de carne do tipo bovino.
// Dica: utilize como filtro o campo tags.
db.produtos.updateMany(
  {
    tags: "bovino",
  },
  {
    $inc: {
      avaliacao: 5,
    },
  }
);
// - nesse caso, utilizamos o campo tags como filtro para achar os sanduíches bovinos;
// - o operador $inc permite incrementar/decrementar valores de um campo específico, utilizando valores positivos ou negativos;

// Crie uma query que incremente o valor do campo avaliacao em 3 em todos os sanduíches de ave.
db.produtos.updateMany(
  {
    tags: "ave",
  },
  {
    $inc: {
      avaliacao: 3,
    },
  }
);
// - repetindo a lógica da query anterior;

// Crie uma query que retorne o nome e avaliacao de todos os sanduíches.
db.produtos.find(
  {},
  {
    _id: 0,
    nome: 1,
    avaliacao: 1,
  }
);
// - o método find() seleciona documentos de uma coleção e retorna um cursor com esses documentos;
// - o find() recebe como parâmetros uma query (filtro de seleção) e uma projection (especifica quais campos serão retornados);
// - como queremos selecionar todos os documentos, a query é vazia;
