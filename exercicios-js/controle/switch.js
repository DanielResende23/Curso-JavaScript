const imprimirResultado = function (nota) {
    switch (Math.ceil (nota)){
     case 10:
     case 9:
        console.log("Quadro de Honra")
        break
     case 8: 
     case 7:
        console.log("Aprovado")
        break 
     case 6:
     case 5:
        console.log("recuperação")
        break
     case 4:
     case 3:
     case 2:
     case 1:
        console.log("Reprovado")
        break
     

    }
}

imprimirResultado(9.4)
imprimirResultado(5.4)
imprimirResultado(4)
imprimirResultado(7)
imprimirResultado(3)
imprimirResultado(2)
imprimirResultado(10)
imprimirResultado(8)
