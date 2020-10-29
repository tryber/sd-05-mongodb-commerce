db.produtos.updateMany(
  { valoresNutricionais: { $exists: 1 } },
  {
    $push: {
      valoresNutricionais: {
        $each: [],
        $sort: {
          percentual: -1,
        },
      },
    },
  }
);

db.produtos.find({}, { nome: 1, valoresNutricionais: 1, _id: 0 });
