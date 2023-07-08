const prompt = require ('prompt-sync')()

var op = 's'
while(op == 's'){

    var dividendo = parseInt(prompt(`Digite um dividendo: `))
    var divisor = parseInt(prompt(`Digite um divisor: `))

    for(var quociente = 0; dividendo >= divisor; quociente++){

        dividendo -= divisor
    }
    
    console.log(`\nO quociente da divisão é: ${quociente}`)
    console.log(`O resto da divisão é: ${dividendo}\n`)
    var op = prompt(`Deseja refazer? s/n: `)
}