// Ordene em todos os documentos os elementos do array valoresNutricionais pelo campo percentual de forma descendente.
// Para isso, escreva no arquivo desafio12.js duas queries, nesta ordem:

// Crie uma query que faça em todos os documentos a ordenação dos elementos do array valoresNutricionais pelo campo percentual de forma descendente.
// Dica: mesmo sem adicionar nenhum novo elemento, para essa operação é necessário utilizar também o modificador $each.
db.produtos.updateMany(
  {},
  {
    $push: {
      valoresNutricionais: {
        $each: [],
        $sort: {
          percentual: -1
        }
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

// Crie uma query que retorne o nome e valoresNutricionais de todos os documentos.
db.produtos.find(
  {},
  {
    _id: 0,
    nome: 1,
    valoresNutricionais: 1
  }
);
