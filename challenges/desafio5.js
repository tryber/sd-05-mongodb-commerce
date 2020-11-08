// Adicione ketchup aos ingredientes para todos os sanduíches menos o McChicken, garantindo que não haja duplicidade nos ingredientes.
// Para isso, escreva no arquivo desafio5.js duas queries, nesta ordem:

// Crie uma query que adicione ketchup aos ingredientes para todos os sanduíches menos o McChicken, garantindo que não haja duplicidade nos ingredientes.
db.produtos.updateMany(
  {
    nome: {
      $ne: "McChicken",
    },
  },
  {
    $addToSet: {
      ingredientes: "ketchup",
    },
  }
);
// - o método updateMany() permite que vários documentos que satisfaçam o critério de filtro sejam alterados de uma única vez;
// - operador de comparação $ne - not equal - utilizado no filtro;
// - o operador $addToSet é utilizado é preciso garantir que os valores não sejam duplicados;

// Crie uma query que retorne o nome e ingredientes de todos os documentos.
db.produtos.find(
  {},
  {
    _id: 0,
    nome: 1,
    ingredientes: 1,
  }
);
// - o método find() seleciona documentos de uma coleção e retorna um cursor com esses documentos;
// - o find() recebe como parâmetros uma query (filtro de seleção) e uma projection (especifica quais campos serão retornados);
// - como queremos selecionar todos os documentos, a query é vazia;
// - o find() sempre traz como padrão o _id e por isso definir como zero (false), para que não apareça;
// - o que é definido como 1 (true) dentro da projection é o que será retornado;
