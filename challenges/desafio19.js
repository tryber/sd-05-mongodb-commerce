// Crie uma query que faça a renomeação do campo descricao para descricaoSite em todos os documentos.
db.produtos.find({}, { $rename: { descricao: "descricaoSite" } });
// { $rename: { "formerName": "newName"} }
// aspas foram embora com Prettier no VSCode, mas podia ter

// Crie uma query que retorne o nome, descricao e descricaoSite de todos os documentos.
db.produtos.find({}, { nome: 1, descricao: 1, descricaoSite: 1, _id: 0 });
