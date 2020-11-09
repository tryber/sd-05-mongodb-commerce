/*
Desafio 14
Adicione o elemento contém sódio ao final do array tags nos produtos
em que o percentual de sódio seja maior do que 20 e menor do que 40.

Para isso, escreva no arquivo desafio14.js duas queries, nesta ordem:

Crie uma query que faça a adição do elemento contém sódio ao final do array tags
nos produtos em que o percentual de sódio seja maior do que 20 e menor do que 40.

Crie uma query que retorne o nome e tags de todos os documentos.
*/
db.produtos.updateMany(
  {
    $and: [
      { "valoresNutricionais.tipo": "sódio" },
      {
        $and: [
          { "valoresNutricionais.percentual": { $lt: 20 } },
          { "valoresNutricionais.percentual": { $gte: 40 } }
      ]
      }
    ]
  },
  {
    $push: {
      "tags": {
        $each: ["contém sódio"]
      }
    }
  },
);

db.produtos.find(
  {},
  { "_id": 0, "nome": 1, "tags": 1 }
)


