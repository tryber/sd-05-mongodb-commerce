// Conte quantos produtos contêm Mc no nome, sem considerar letras maiúsculas ou minúsculas.
db.produtos.count({
  nome: {
    $regex: /Mc/i
  }
});

// - operador $regex - expressões regulares para seleção de strings
// - também daria certo com o count() no final, assim:
// db.produtos.find({ nome: { $regex: /Mc/i } }).count();
