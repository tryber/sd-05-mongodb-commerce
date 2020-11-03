// Inclua o campo criadoPor em todos os documentos, colocando "Ronald McDonald" no valor desse campo.
// Para isso, escreva no arquivo desafio1.js duas queries, nesta ordem:

// Crie uma query que adicione o campo criadoPor em todos os documentos, colocando "Ronald McDonald" no valor desse campo.
db.produtos.updateMany({}, {
    $set: {
        "criadoPor": "Ronald McDonald"
    }
});

// - o método updateMany() permite que vários documentos que satisfaçam o critério de filtro sejam alterados de uma única vez;
// - nesse caso não há necessidade de nenhum filtro porque queremos alterar todos os documentos;
// - operador $set altera o valor de um campo específico e, se o campo não existir, o $set adiciona um novo campo com o valor especificado;

// Crie uma query que retorne o nome e criadoPor de todos os produtos.
db.produtos.find({}, {
    "_id": 0, 
    nome: 1, 
    "criadoPor": 1
});

// - o método find() seleciona documentos de uma coleção e retorna um cursor com esses documentos;
// - o find() recebe como parâmetros uma query (filtro de seleção) e uma projection (especifica quais campos serão retornados);
// - como queremos selecionar todos os documentos, a query é vazia;
