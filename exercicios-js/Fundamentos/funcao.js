// função sem retorno

function imprimirSoma (a, b) {
    console.log(a+b)
} 
imprimirSoma (4, 8)

// Função com retorno 

function soma (a, b = 7)  {
    return a + b
}

console.log (soma(3))
