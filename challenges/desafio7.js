// Remova o item cebola de todos os sanduíches.
// Para isso, escreva no arquivo desafio7.js duas queries, nesta ordem:

// Crie uma query que faça a remoção do item cebola em todos os sanduíches.
db.produtos.updateMany(
  {},
  {
    $pull: {
      ingredientes: "cebola"
    }
  }
);
// - o método updateMany() permite que vários documentos que satisfaçam o critério de filtro sejam alterados de uma única vez;
// - o operador $pull remove de um array existente todos os elementos com um ou mais valores que atendam à condição especificada;

// Crie uma query que retorne o nome e ingredientes de todos os documentos.
db.produtos.find(
  {},
  {
    _id: 0,
    nome: 1,
    ingredientes: 1
  }
);
// - como queremos selecionar todos os documentos, a query do método find() é vazia;
// - o find() sempre traz como padrão o _id e por isso definir como zero (false), para que não apareça;
// - o que é definido como 1 (true) dentro da projection é o que será retornado;
