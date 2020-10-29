db.produtos.updateMany(
  { nome: { $ne: "McChicken" } },
  { $addToSet: { ingredientes: "ketchup" } }
);
db.produtos.find({}, { ingredientes: 1, nome: 1, _id: 0 });
