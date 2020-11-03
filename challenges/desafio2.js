// Inclua o campo valorUnitario em todos os documentos em que esse campo não existe e atribua a ele o valor "0.00", com o tipo NumberDecimal.
// Para isso, escreva no arquivo desafio2.js duas queries, nesta ordem:

// Crie uma query que adicione o campo valorUnitario em todos os documentos em que esse campo não existe e atribua a ele o valor "0.00", com o tipo NumberDecimal.
db.produtos.updateMany(
  {
    valorUnitario: {
      $exists: false,
    }
  },
  {
    $set: {
      valorUnitario: NumberDecimal("0.00"),
    }
  }
);

// - o método updateMany() permite que vários documentos que satisfaçam o critério de filtro sejam alterados de uma única vez;
// - updateMany() recebe dois parâmetros: query (filtro) e projection (o que será alterado)
// - nesse caso o filtro é feito utilizando o operador $exists;
// - operador $set altera o valor de um campo específico;
// - tipo NumberDecimal, referência documentação oficial Mongo:
// - https://docs.mongodb.com/manual/core/shell-types/#numberdecimal

// Crie uma query que retorne o nome e valorUnitario de todos os produtos.
db.produtos.find(
  {},
  {
    _id: 0,
    nome: 1,
    valorUnitario: 1,
  }
);

// - o método find() seleciona documentos de uma coleção e retorna um cursor com esses documentos;
// - o find() recebe como parâmetros uma query (filtro de seleção) e uma projection (especifica quais campos serão retornados);
// - como queremos selecionar todos os documentos, a query é vazia;
