// Inclua bacon no final da lista de ingredientes dos sanduíches Big Mac e Quarteirão com Queijo.
// Para isso, escreva no arquivo desafio6.js duas queries, nesta ordem:

// Crie uma query que faça a inclusão de bacon no final da lista de ingredientes dos sanduíches Big Mac e Quarteirão com Queijo.
db.produtos.updateMany(
  {
    nome: {
      $in: [ "Big Mac", "Quarteirão com Queijo" ],
    },
  },
  {
    $push: {
      ingredientes: "bacon",
    },
  }
);
// - o método updateMany() permite que vários documentos que satisfaçam o critério de filtro sejam alterados de uma única vez;
// - updateMany() recebe dois parâmetros: query (filtro) e projection (o que será alterado);
// - o operador $push adiciona um valor a um array e, se o campo não existir no documento, um novo array com o valor em um elemento será adicionado;

// Crie uma query que retorne o nome e ingredientes de todos os documentos.
db.produtos.find(
  {},
  {
    _id: 0,
    nome: 1,
    ingredientes: 1,
  }
);
// - como queremos selecionar todos os documentos, a query do método find() é vazia;
// - o find() sempre traz como padrão o _id e por isso definir como zero (false), para que não apareça;
// - o que é definido como 1 (true) dentro da projection é o que será retornado;
