// Insira os elementos combo e tasty no array tags de todos os sanduíches e aproveite para deixar os elementos em ordem alfabética ascendente.
// Para isso, escreva no arquivo desafio11.js duas queries, nesta ordem:

// Crie uma query que faça tanto a inserção dos elementos combo e tasty no array tags de todos os sanduíches quanto a ordenação dos elementos
//  de tags em ordem alfabética ascendente.
db.produtos.updateMany(
  {},
  {
    $push: {
      tags: {
        $each: [ "combo", "tasty" ],
        $sort: 1,
      }
    }
  }
);
// - método updateMany () com filtro vazio para atualizar todos;
// - o operador $push adiciona um valor a um array e, se o campo não existir no documento, um novo array com o valor em um elemento será adicionado;
// - o método sort() permite ordenar os documentos por algum campo;
// - usando o valor 1, os docs são ordenados de forma crescente ou alfabética;
// - usando o valor -1, ordem decrescente ou contra-alfabética;
// - o modificador $each pode ser usado junto com operador $push ou com operador $addToSet;
// - referência: https://docs.mongodb.com/manual/reference/operator/update/each/

// Crie uma query que retorne o nome e tags de todos os documentos.
db.produtos.find(
  {},
  {
    _id: 0,
    nome: 1,
    tags: 1,
  }
);
