Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <=fim
}

const imprimirResultado = function (nota) {
    if (nota.entre (9 ,10)) {
        console.log('Quadro de Honra')
    }
    else if (nota.entre (7, 8.99)){
        console.log('Aprovado')
    }
    else if (nota.entre (5, 6.99)) {
        console.log('Recuperação')
    }
    else if (nota.entre(0, 4.99)) {
        console.log('Reprovado')
    }
}

imprimirResultado(10)
imprimirResultado(8)
imprimirResultado(6)
imprimirResultado(4)
imprimirResultado(0)