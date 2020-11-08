// Conte quantos produtos têm 4 ingredientes.
db.produtos.count({
  ingredientes: {
    $size: 4
  }
});

// - novamente também daria certo com o count() no final;
