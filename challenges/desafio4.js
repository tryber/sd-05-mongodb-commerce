// Atribua a data corrente ao campo ultimaModificacao no sanduíche Big Mac.
// Para isso, escreva no arquivo desafio4.js duas queries, nesta ordem:

// Crie uma query que atribua a data corrente ao campo ultimaModificacao no sanduíche Big Mac. Para a data corrente faça uso do tipo Date.
db.produtos.updateOne(
  {
    nome: "Big Mac",
  },
  {
    $currentDate: {
      ultimaModificacao: true,
    }
  }
);
// - honestidade acadêmica: aprendi através do PR da Juliette que é possível a sintaxe dessa forma:
// - dentro do operador $currentDate, o valor 'true' indica por padrão o tipo 'date';
// - outra sintaxe possível é simplesmente escrever { $type: "date" };

// Crie uma query que retorne o nome de todos os documentos em que o campo ultimaModificacao existe.
db.produtos.find(
  {
    ultimaModificacao: {
      $exists: 1,
    }
  },
  {
    nome: 1,
    _id: 0,
  }
);
// - o método find() seleciona documentos de uma coleção e retorna um cursor com esses documentos;
// - o find() recebe como parâmetros uma query (filtro de seleção) e uma projection (especifica quais campos serão retornados);
// - nesse caso, o operador $exists foi utilizado no filtro;
// - no operador $exists, o valor 0 significa 'false' e o valor 1 significa 'true';
