// Adicione a quantidade de vendas dos sanduíches por dia da semana.
// Para isso, escreva no arquivo desafio10.js quatro queries, nesta ordem:

// Crie uma query que inclua um array com sete posições em todos os sanduíches.
// Cada uma delas representará um dia da semana, e cada posição iniciará em 0. O array deve se parecer como abaixo:
// "vendasPorDia": [0, 0, 0, 0, 0, 0, 0]
// O primeiro item desse array representa as vendas no domingo, o segundo item representa as vendas na segunda-feira, e assim até chegar ao último item, que representa as vendas no sábado.
db.produtos.updateMany(
  {},
  {
    $set: {
      vendasPorDia: [0, 0, 0, 0, 0, 0, 0],
    },
  }
);
// - o método updateMany() permite que vários documentos que satisfaçam o critério de filtro sejam alterados de uma única vez;
// - operador $set altera o valor de um campo específico ou cria esse campo com esse valor;

// Crie uma query que incremente as vendas de Big Mac às quartas-feiras em 60.
db.produtos.updateMany(
  {
    nome: "Big Mac",
  },
  {
    $inc: {
      "vendasPorDia.3": 60,
    },
  }
);
// - o operador $inc permite incrementar/decrementar valores de um campo específico, utilizando valores positivos ou negativos;
// - é possível acessar uma posição de um array utilizando o ponto, conforme na linha 26: "vendasPorDia.3"

// Crie uma query que incremente as vendas de todos os sanduíches de carne do tipo bovino e pão aos sábados em 120.
db.produtos.updateMany(
  {
    tags: {
      $all: ["bovino", "pão"],
    },
  },
  {
    $inc: {
      "vendasPorDia.6": 120,
    },
  }
);
// - utilização do campo tags como filtro para achar os sanduíches bovinos & pão, da mesma forma que no desafio 3;
// - o operador $inc permite incrementar/decrementar valores de um campo específico, utilizando valores positivos ou negativos;
// - é possível acessar uma posição de um array utilizando o ponto;

// Crie uma query que retorne o nome e vendasPorDia de todos os documentos.
db.produtos.find(
    {},
    {
      _id: 0,
      nome: 1,
      vendasPorDia: 1,
    }
  );
