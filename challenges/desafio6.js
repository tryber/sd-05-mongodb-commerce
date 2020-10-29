db.produtos.updateMany(
  {"nome": {$in: ["Big Mac", "Quarteirão com Queijo"]}},
  {$push: {"imgredientes": "bacon"}}
);

db.produtos.find({}, { "nome" : 1, "ingredientes": 1, "_id": 0 });
