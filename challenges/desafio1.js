db.produtos.update({}, { $set: { "criadoPor": "Ronald McDonald" } }, false, true);

db.produtos.find({}, { "nome": 1, "criadoPor": 1, "_id": 0 });
