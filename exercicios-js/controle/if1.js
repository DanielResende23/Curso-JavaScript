function soBoanoticia (nota) {
    if (nota >= 7) {
        console.log("Aprovado com", + nota)
    }
}

soBoanoticia(7.6)
soBoanoticia(9)
soBoanoticia(5)

function seForVerdadeEuFalo (valor) {
    if (valor) {
        console.log("É verdade...", + valor)
    }
}
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(false)
seForVerdadeEuFalo(true)
seForVerdadeEuFalo(false)
