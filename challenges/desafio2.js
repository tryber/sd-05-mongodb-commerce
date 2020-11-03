db.produtos.update({}, { $set: { valorUnitario: NumberDecimal("0.00") } }, false, true);

db.produtos.find({}, { "nome": 1, "valorUnitario": 1, "_id": 0 });
