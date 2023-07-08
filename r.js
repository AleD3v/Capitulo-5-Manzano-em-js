const prompt = require('prompt-sync')()
var start = 1

while(true){
    var a = prompt("Digite um valor (digite um valor negativo para parar): ")

    if(a < 0){
        break
    }

    if(start == 1){
        var menor = a, maior = a
        start++
    }

    if(a > maior){
        maior = a
    }else if(a < menor){
        menor = a
    }
    
}
console.log(`O maior número é ${maior} e o menor é ${menor}`)
