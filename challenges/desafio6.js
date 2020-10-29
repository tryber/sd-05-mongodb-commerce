db.produtos.updateMany(
  { nome: { $in: ["Big Mac", "Quarteirão com Queijo"] } },
  { $push: { ingredientes: "bacon" } }
);
db.produtos.find({}, { ingredientes: 1, nome: 1, _id: 0 });
