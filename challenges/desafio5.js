// Adicione ketchup aos ingredientes para todos os sanduíches menos o McChicken, garantindo que não haja duplicidade nos ingredientes.
// Para isso, escreva no arquivo desafio5.js duas queries, nesta ordem:
// Crie uma query que adicione ketchup aos ingredientes para todos os sanduíches menos o McChicken, garantindo que não haja duplicidade nos ingredientes.
// Crie uma query que retorne o nome e ingredientes de todos os documentos.

//Operador $ne - exclui este produto da atualização
//Uso do operador $addToSet para garantir que não haja valores duplicados no array.

db.produtos.updateMany({ nome: { $ne: "McChicken"}}, { $addToSet: { ingredientes: "ketchup"}});

db.produtos.find({}, { nome:1, ingredientes:1, _id:0 });
