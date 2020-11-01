// Remova o primeiro ingrediente do sanduíche Quarteirão com Queijo.
// Para isso, escreva no arquivo desafio8.js duas queries, nesta ordem:
// Crie uma query que faça a remoção do primeiro ingrediente no sanduíche Quarteirão com Queijo.
// Crie uma query que retorne o nome e ingredientes de todos os documentos.

// Uso do operador $pop com valor -1 remove o primeiro item, já com valor 1 remove o último item do array

db.produtos.updateOne({ nome: "Quarteirão com Queijo"},{ $pop: { ingredientes: -1 }});

db.produtos.find({}, { nome:1, ingredientes:1, _id:0});
