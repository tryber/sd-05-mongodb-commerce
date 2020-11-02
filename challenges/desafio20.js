db.produtos.updateMany({nome: "Big Mac"}, {$pull: {"curtidas": / /i}});
db.produtos.find({}, {_id: 0, nome: 1, curtidas: 1});
