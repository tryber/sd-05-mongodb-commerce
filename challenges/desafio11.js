db.produtos.updateOne({}, {$addToSet: {tags: {$each: ["combo", "tasty"], $sort: {tags: 1}}}});
db.produtos.find({}, {_id: 0, nome: 1, tags: 1});
