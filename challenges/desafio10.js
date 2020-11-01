db.produtos.updateMany({}, {$addToSet: {"vendasPorDia": {$each: [0, 0, 0, 0, 0, 0, 0]}}});
db.produtos.updateMany({"nome": "Big Mac"}, {$inc: {"vendasPorDia.3": 60}});
db.produtos.updateMany({$and: [{"tags": [ "bovino", "pão" ]}]}, {$inc: {"vendasPorDia.6": 120}});
db.produtos.find({}, {_id: 0, "nome": 1, "vendasPorDia": 1});
