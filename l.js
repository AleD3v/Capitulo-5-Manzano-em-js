const prompt = require('prompt-sync')()
var somatorio = 0
for (var i = 0; i < 15; i++){

    
    var numb = prompt("Digite um valor: ")
    numb = parseInt(numb)

    var resultado = 1
    var fatorial = numb

    for( ;fatorial >= 1; fatorial--){

        resultado *= fatorial
        
    }
    somatorio += resultado
}
console.log(somatorio)