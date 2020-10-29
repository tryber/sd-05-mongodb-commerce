db.produtos.updateMany(
  { nome: { $ne: "McChicken" } },
  { $set: { ingredientes: "ketchup" } }
);
db.produtos.find({}, { ingredientes: 1, nome: 1, _id: 0 });
