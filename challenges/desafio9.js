//db.voos.count({ $or: [{ "ano": { $eq: 2017 } }, { "ano": { $eq: 2018 } }] });
db.voos.count({"ano": {$in: [2017,2018]}});
