// Adicione o elemento muito sódio ao final do array tags nos produtos em que o percentual de sódio seja maior ou igual a 40.
// Para isso, escreva no arquivo desafio13.js duas queries, nesta ordem:

// Crie uma query que faça a adição do elemento muito sódio ao final do array tags nos produtos em que o percentual de sódio seja maior ou igual a 40.
db.produtos.updateMany(
  {
    valoresNutricionais: {
      $elemMatch: {
        tipo: "sódio",
        percentual: {
          $gte: 40
        }
      }
    }
  },
  {
    $push: {
      tags: "muito sódio"
    }
  }
);

// - com o operador $elemMatch é possível especificar várias queries para um mesmo array;
// - operador $elemMatch seleciona os docs que contêm um *campo do tipo array* com pelo menos um elemento que satisfaça todos os critérios;
// - operador $gte - greater than or equal;
// - o operador $push adiciona um valor a um array e, se o campo não existir no documento, um novo array com o valor em um elemento será adicionado;

// Crie uma query que retorne o nome e tags de todos os documentos.
db.produtos.find(
  {},
  {
    _id: 0,
    nome: 1,
    tags: 1
  }
);
