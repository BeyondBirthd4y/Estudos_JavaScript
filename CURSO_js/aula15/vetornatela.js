valores= [8,1,2,3,7,9,5,3]
for (var spot =0; spot<valores.length; spot++){
    console.log(`a posição ${spot} tem o valor `+valores[spot])
}//length é bom para fazer com que todos sejam exibidos

console.log()

//método fácil das versões mais recentes
for (let pos in valores){
    console.log(valores[pos])
}

console.log(`O valor 7 está na posição: `+ valores.indexOf(7))
//retorna a key onde este valor está. Se não encontrar, ele escreverá -1