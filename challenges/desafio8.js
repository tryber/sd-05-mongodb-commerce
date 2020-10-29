db.produtos.updateMany(
  {nome: {$eq: "Quarteirão com Queijo"}},
  { $pop: { ingredientes: -1 } }
);
db.produtos.find({}, { ingredientes: 1, nome: 1, _id: 0 });
