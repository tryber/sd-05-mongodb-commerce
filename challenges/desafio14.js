// Adicione o elemento contém sódio ao final do array tags nos produtos em que o percentual de sódio seja maior do que 20 e menor do que 40.
// Para isso, escreva no arquivo desafio14.js duas queries, nesta ordem:

// Crie uma query que faça a adição do elemento contém sódio ao final do array tags nos produtos em que o percentual de sódio seja maior do que 20 e menor do que 40.
db.produtos.updateMany(
    {
      valoresNutricionais: {
        $elemMatch: {
          tipo: "sódio",
          percentual: {
            $gt: 20,
            $lt: 40
          }
        }
      }
    },
    {
      $push: {
        tags: "contém sódio"
      }
    }
  );
// - com o operador $elemMatch é possível especificar várias queries para um mesmo array;
// - operador $elemMatch seleciona os docs que contêm um *campo do tipo array* com pelo menos um elemento que satisfaça todos os critérios;
// - operador $gt - greater than; operador $lt - lower than;
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
  