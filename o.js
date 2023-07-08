for(var i = 1; i < 10; i += 2){

    var fatorial = i
    var resultado = 1

    for(; fatorial >= 1; fatorial--){

        resultado *= fatorial
    }
    console.log(`A fatorial do número ${i} é: ${resultado}`)
}