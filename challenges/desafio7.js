db.produtos.updateMany(
  {},
  { $pull: { ingredientes: "cebola" } }
);
db.produtos.find({}, { ingredientes: 1, nome: 1, _id: 0 });
