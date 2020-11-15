db.produtos.updateOne(
  { nome: "Big Mac" },
  { $currentDate: { ultimaModificação: true } }
);

db.produtos.find(
  { ultimaModificação: { $exists: true } },
  { _id: 0, nome: 1 },
);
