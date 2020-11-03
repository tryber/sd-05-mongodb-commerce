db.produtos.updateMany(
  {
    valoresNutricionais:
    {
      $elemMatch: { tipo: { $eq: "sódio" }, percentual: { $gte: 40 } }
    }
  },
  { $addToSet: { tags: { $each: ["muito sódio"] } } }
);

db.produtos.find({}, { "nome": 1, "tags": 1, "_id": 0 });
