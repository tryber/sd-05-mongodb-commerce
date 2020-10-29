// Crie uma query que faça a renomeação do campo descricao para descricaoSite em todos os documentos.
db.produtos.updateMany({}, { $rename: { descricao: "descricaoSite" } });
// sintaxe { $rename: { "formerName": "newName"} } - no caso aspas foram embora com Prettier no VSCode, mas podia ter

// Crie uma query que retorne o nome, descricao e descricaoSite de todos os documentos.
db.produtos.find({}, { nome: 1, descricao: 1, descricaoSite: 1, _id: 0 });
// mongo retorna nome e descricaoSite jà que descricao foi renomeado
