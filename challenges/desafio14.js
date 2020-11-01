db.produtos.updateMany({$and: [{"valoresNutricionais.tipo": "sódio"}, {"valoresNutricionais.percentual": {$gt: 20}}, {"valoresNutricionais.percentual": {$lt: 40}}]}, {$push: {"tags": "muito sódio"}});
db.produtos.find({}, {_id: 0, "nome": 1, "tags": 1});
