// Desafio 18
// Conte quantos documentos contêm a expressão 'feito com' utilizando o operador $text.

// Para isso, escreva no arquivo desafio18.js duas queries, nesta ordem:

// Crie uma query que faça a criação de um índice do tipo text no campo descricao com o idioma padrão portuguese.

// Crie uma query que retorne a quantidade de documentos que contêm a expressão feito com utilizando o operador $text.

// https://docs.mongodb.com/manual/tutorial/specify-language-for-text-index/
db.produtos.createIndex({descricao: "text"}, {default_language: "portuguese"});

db.produtos.count({$text: {$search: "\"feito com\""}});
