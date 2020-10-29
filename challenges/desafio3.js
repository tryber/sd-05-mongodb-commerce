db.produtos.updateMany({}, { $set: { avaliacao: NumberInt(0) } });

db.produtos.updateMany({ tag: "bovino" }, { $inc: { avaliacao: 5 } });

db.produtos.updateMany({ tag: "ave" }, { $inc: { avaliacao: 3 } });

db.produtos.find({}, { nome: 1, avaliacao: 1 });
