// Conte quantos produtos contêm Mc no nome, sem considerar letras maiúsculas ou minúsculas.

// Uso do $regex como está entre / /i, não importa a forma que estiver escrito: mauiúsculo ou minísculo o valor será lido e contado

db.produtos.count({ nome: { $regex: /Mc/i } });
