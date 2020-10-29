db.produtos.updateOne(
  { _id: ObjectId("5f280af11532b7276329ba47") },
  { $currentDate: { ultimaModificacao: true } }
);

db.produtos.find({ ultimaModificacao: { $exists: true } }, { nome: 1, _id: 0 });
