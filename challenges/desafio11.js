// Insira os elementos combo e tasty no array tags de todos os sanduíches e aproveite para deixar os elementos em ordem alfabética ascendente.
db.produtos.updateMany(
  {},
  { $push: { tags: { $each: ["combo", "tasty"], $sort: 1 } } }
);
db.produtos.find({}, { nome: 1, tags: 1, _id: 0 });
