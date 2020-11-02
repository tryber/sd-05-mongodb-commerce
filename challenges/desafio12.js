/* db.produtos.updateMany({"valoresNutricionais.percentual": {$exists: true}}, {"valoresNutricionais": $each: ["percentual": 0], $sort: {percentual: -1}});
db.produtos.find({}, {_id: 0, nome: 1, "valoresNutricionais": 1});

$each: [
valoresNutricionais

percentual

db.produtos.find({"ultimaModificacao": {$exists: true}}, {_id: 0, nome: 1}); */