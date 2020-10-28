// o sanduíche que já tinha Ketchup era o Quarteirão, não o Mcchicken
// O que vcs queriam dizer é: além  de não por no McChicken, não duplique o ketchup nos que já tem.

db.produtos.updateMany(
  { nome: { $ne: "McChicken" } },
  {
    $addToSet: {
      ingredientes: "ketchup",
    },
  },
);

db.produtos.find({}, { nome: 1, ingredientes: 1, _id: 0 });
