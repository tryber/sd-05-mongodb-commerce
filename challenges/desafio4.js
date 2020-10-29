// Atribua a data corrente ao campo ultimaModificacao no sanduíche Big Mac.
db.produtos.updateOne(
  { nome: "Big Mac" },
  { $currentDate: { ultimaModificacao: true } }
);
db.produtos.find({ ultimaModificacao: { $exists: true } }, { nome: 1, _id: 0 });
