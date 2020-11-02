// Atribua a data corrente ao campo ultimaModificacao no sanduíche Big Mac.
// Para isso, escreva no arquivo desafio4.js duas queries, nesta ordem:
// Crie uma query que atribua a data corrente ao campo ultimaModificacao no sanduíche Big Mac. 
// Para a data corrente faça uso do tipo Date.
// Crie uma query que retorne o nome de todos os documentos em que o campo ultimaModificacao existe.

//currentDate é por padrão do tipo date, pode ser usado o valor booleano pra atribuir a data ao campo de interesse

db.produtos.updateMany({ nome: "Big Mac"}, { $currentDate: { ultimaModificacao: true }});

db.produtos.find({ ultimaModificacao: { $exists: 1 }}, { nome: 1, _id: 0 });
