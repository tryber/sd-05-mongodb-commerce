// Crie uma query que atribua a data corrente ao campo ultimaModificacao no sanduíche Big Mac. Para a data corrente faça uso do tipo Date.
db.produtos.updateOne(
  { nome: "Big mac" },
  { $currentDate: { ultimaModificacao: true } }
);
// true indica por padrão o tipo Date, também era possível via { $type: "date" }

// Crie uma query que retorne o nome de todos os documentos em que o campo ultimaModificacao existe.
db.produtos.find({ ultimaModificacao: { $exists: true } }, { nome: 1, _id: 0 });
// Como sempre true também pode ser escrito 1
