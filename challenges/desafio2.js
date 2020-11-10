db.produtos.updateMany(
  { valorUnitario: { $exists: false } },
  { $addToSet: { valorUnitario: NumberDecimal("0.00") } }
);

db.produtos.find({}, { _id: 0, nome: 1, valorUnitario: 1 }).pretty();
