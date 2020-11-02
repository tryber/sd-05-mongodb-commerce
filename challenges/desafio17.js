db.produtos.createIndex({"descricao": "text"}, {collation: {$language: portuguese}});
db.produtos.count({$text: {$search: "frango hamburguer"}});
