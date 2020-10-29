db.produtos.updateMany(
  {},
  { valorUnitario: { $exists: false } },
  { $set: { valorUnitario: NumberDecimal(0.0) } }
);

db.produtos.find({}, { nome: 1, valorUnitario: 1 });
