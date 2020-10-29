db.produtos.updateOne({ nome: "Big Mac" }, { $unset: { curtidas: "" } });
db.produtos.find({}, { _id: 0, curtidas: 1, nome: 1 });
