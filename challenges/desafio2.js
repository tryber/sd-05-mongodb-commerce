db.produtos.updateMany(
    {valorUnitario: {$exists: false}},
    {
        $set: {"valorUnitario": NumberDecimal("0.00")}
    }
);

db.produtos.find(
    {},
    { _id: 0, nome: 1, valorUnitario: 1}
);

// transparencia, olhei PR do colega para entender que precisa colocar aspas duplas no "0.00"
 