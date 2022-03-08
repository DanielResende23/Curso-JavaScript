// armazenando uma função em uma variavel
const imprimirSoma = function (a, b) {
    console.log(5 + 7)
}

imprimirSoma()


function imprimirSubtracao ( a, b){
    console.log(a - b)
}

imprimirSubtracao (10, 6)

const imprimirDivisao = function (a = 50,b = 8) {
    return a / b
}
console.log (imprimirDivisao())

