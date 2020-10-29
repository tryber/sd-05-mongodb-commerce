db.produtos.updateMany(
  {},
  { $set: { "avaliacao": NumberInt(0) } }
);
db.proutos.updateMany(
  { tags: { $eq: "bovino" } },
  { $inc: { avalicao: 5 } }
);
db.proutos.updateMany(
  { tags: { $eq: "ave" } },
  { $inc: { avalicao: 3 } }
);
db.produtos.find(
  {},
  { _id: 0, nome: 1, avaliacao: 1 }
).pretty();
