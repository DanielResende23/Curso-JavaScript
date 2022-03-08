// novo recurso do ES 2015

const personagem = {
    nome: 'Luffy',
    idade: 20,
    funcao: 'Pirata',
    endereco: {
        rua: 'one piece',
        numero: 1,
    }
}

console.log (personagem)

const {nome, idade} = personagem
console.log (nome, idade)

const {endereco: {rua, numero}} = personagem
console.log(rua, numero)

const {nome:pessoa, idade:anos}= personagem
console.log(pessoa)
