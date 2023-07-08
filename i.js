var atual = 1, anterior = 0
console.log(anterior)
for(var i = 0; i < 15; i++){
    console.log(atual)
    var proximo = atual + anterior
    anterior = atual
    atual = proximo
}