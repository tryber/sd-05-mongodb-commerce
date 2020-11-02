// Conte quantos produtos têm 4 ingredientes.
// $size para filtragem pelo tamanho do array

db.produtos.count({ ingredientes: { $size: 4}});
