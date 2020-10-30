// > db.produtos.findOne();
// {
// 	"_id" : ObjectId("5f280af11532b7276329ba47"),
// 	"nome" : "Big Mac",
// 	"ingredientes" : [
// 		"hamburguer",
// 		"alface",
// 		"queijo",
// 		"molho especial",
// 		"cebola",
// 		"picles",
// 		"pão com gergelim"
// 	],
// 	"tags" : [
// 		"bovino",
// 		"pão"
// 	],
// 	"valoresNutricionais" : [
// 		{
// 			"tipo" : "calorias",
// 			"quantidade" : 502,
// 			"unidadeMedida" : "kcal",
// 			"percentual" : 25
// 		},
// 		{
// 			"tipo" : "carboidratos",
// 			"quantidade" : 45,
// 			"unidadeMedida" : "gramas",
// 			"percentual" : 15
// 		},
// 		{
// 			"tipo" : "sódio",
// 			"quantidade" : 1047,
// 			"unidadeMedida" : "miligramas",
// 			"percentual" : 44
// 		},
// 		{
// 			"tipo" : "proteínas",
// 			"quantidade" : 27,
// 			"unidadeMedida" : "gramas",
// 			"percentual" : 36
// 		},
// 		{
// 			"tipo" : "lipídios",
// 			"quantidade" : 25,
// 			"unidadeMedida" : "gramas",
// 			"percentual" : 45
// 		}
// 	],
// 	"descricao" : "Não existe nada igual\nDois hambúrgures, alface, queijo, molho especial, cebola e picles num pão com gergelim",
// 	"curtidas" : 145,
// 	"vendidos" : 137
// }

// Crie uma query que adicione o campo criadoPor em todos os documentos, colocando "Ronald McDonald" no valor desse campo.
db.produtos.updateMany({}, { $set: { criadoPor: "Ronald McDonald" } });

// Crie uma query que retorne o nome e criadoPor de todos os produtos.
db.produtos.find({}, { nome: 1, criadoPor: 1, _id: 0 });
