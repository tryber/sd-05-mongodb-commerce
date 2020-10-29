// Crie uma query que faça a remoção do campo curtidas do item Big Mac.
db.produtos.updateOne({ name: "Big Mac" }, { $unset: { curtidas: "" } });
// unset é para campos inteiros, pull é para elementos de arrays contidos em campos.

// Crie uma query que retorne o nome e curtidas de todos os documentos.
db.produtos.find({}, { nome: 1, curtidas: 1, _id: 0 });
