db.produtos.updateMany(
  {
    valoresNutricionais:
    {
      $elemMatch: { tipo: { $eq: "sódio" }, $and: [{ percentual: { $gt: 20 } }, { percentual: { $lt: 40 } }] }
    }
  },
  { $addToSet: { tags: { $each: ["contém sódio"] } } }
);

db.produtos.find({}, { "nome": 1, "tags": 1, "_id": 0 });
