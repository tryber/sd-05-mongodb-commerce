db.produtos.updateMany({}, {$set: {"criadoPor": "Ronald McDonald"}});
db.produtos.find({}, {_id: 0, "name": 1, "criadoPor": 1});
