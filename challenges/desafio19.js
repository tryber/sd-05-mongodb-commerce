db.produtos.updateMany({"descricao": / /i}, {$rename: {"descricao": "descricaoSite"}});
db.produtos.find({}, {_id: 0, "nome": 1, "descricao": 1, "descricaoSite": 1});
