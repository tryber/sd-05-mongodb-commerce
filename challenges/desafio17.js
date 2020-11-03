db.produtos.createIndex(
  { descricao: "text" },
  { default_language: "portuguese" }
);
db.produtos.find({ $text: { $search: "frango hamburguer" } }).count();

/* transparencia: Para resolver a primeira parte do exercicio,
 de estabelecer uma linguagem na criacao do index de texto, 
 eu consultei o PR do colega de sala Sidney Ramos */
