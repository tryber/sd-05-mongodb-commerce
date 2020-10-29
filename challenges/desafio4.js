db.produtos.updateMany(
  { nome: "Big Mac" },
  {
    $currentDate: {
      ultimaModificacao: { $type: "date" },
    },
  },
);
db.produtos.find({ ultimaModificacao: { $exists: 1 } }, { nome: 1, _id: 0 });
