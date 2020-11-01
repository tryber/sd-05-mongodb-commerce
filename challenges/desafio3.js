db.produtos.update({}, { $set: { avaliacao: NumberInt(0) } }, false, true);

db.produtos.updateMany({ "tags": { $eq: "bovino" } }, { $set: { "avaliacao": 5 } });

db.produtos.updateMany({ "tags": { $eq: "ave" } }, { $inc: { "avaliacao": 3 } });

db.produtos.find({}, { "nome": 1, "avaliacao": 1, "_id": 0 });
