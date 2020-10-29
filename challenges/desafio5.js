db.produtos.updateMany(
  {"nome": {$ne: "McChicken"}},
  {$addToSet: {"igredientes": "ketchup"}}
);

db.produtos.find({}, { "nome" : 1, "ingredientes": 1, "_id": 0 });
