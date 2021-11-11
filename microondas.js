//verificação do tempo de preparo
function confereTemp(tempo, stdTemp){
	return (tempo > stdTemp * 2 && 	tempo < stdTemp * 3)?"Comida queimou":(tempo < 	stdTemp)?"Tempo insuficiente":(tempo > stdTemp * 3)?"kabumm":"Prato Pronto, bom apetite"
}
//verificação de produto
function micro(alimento,tempo){
	if(alimento == "pipoca"){
		let stdTemp = 10;
	   return confereTemp(tempo,stdTemp)
	}else if(alimento == "macarrao"){
		let stdTemp = 8;
		return confereTemp(tempo,stdTemp)
	}else if(alimento == "carne"){
		let stdTemp = 15;
		return confereTemp(tempo,stdTemp)
	}else if(alimento == "feijao"){
		let stdTemp = 12;
		return confereTemp(tempo,stdTemp)
	}else if(alimento == "brigadeiro"){
		let stdTemp = 8;
		return confereTemp(tempo,stdTemp)
	}
}
//interação e manipulação do produto
console.log(micro("carne", 31))