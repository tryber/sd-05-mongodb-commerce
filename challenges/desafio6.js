db.produtos.updateMany({"nome": "Big Mac"}, {$addToSet: {"ingredientes": "bacon"}});
db.produtos.updateMany({"nome": "Quarteirão com Queijo"}, {$addToSet: {"ingredientes": "bacon"}});
db.produtos.find({}, { _id: 0, nome: 1, ingredientes: 1});
