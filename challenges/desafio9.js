// Remova o último ingrediente do sanduíche Cheddar McMelt.
// Para isso, escreva no arquivo desafio9.js duas queries, nesta ordem:

// Crie uma query que faça a remoção do último ingrediente no sanduíche Cheddar McMelt.
db.produtos.updateOne(
    {
      nome: "Cheddar McMelt",
    },
    {
      $pop: {
        ingredientes: 1,
      },
    }
  );
// - o método updateOne() altera apenas o primeiro documento que satisfaça o critério de filtro;
// - o operador $pop é uma forma de remover o primeiro ou último elemento de um array;  
// - $pop: ao passar o valor -1, remove o primeiro elemento; ao passar o valor 1, remove o último elemento do array;

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
  