db.produtos.updateMany(
  {
    $or: [
      {"nome": {$eq: "Big Mac"}},
      {"nome": {$eq: "Quarteirão com Queijo"}}
    ]
  },
  {$addToSet: {"ingredientes": "bacon"}}
);

db.produtos.find({}, {"nome": 1, "ingredientes": 1, "_id": 0});
