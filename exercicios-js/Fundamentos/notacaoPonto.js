console.log(Math.ceil(6.3)); // Math.ceil arredonda o número especificado.

const obj1 = {}
   obj1.nome = 'Bola'
   obj1.marca = 'Nike'
console.log(obj1.marca)
console.log(obj1.nome)

function obj(nome){
    this.nome = nome // this.nome torna o elemento visivel para fora da função
    this.exec = function (){
        console.log('exec..')
    }
}

const obj2 = new obj ('Mesa')
const obj3 = new obj ('Mouse')

console.log(obj2)
console.log(obj3)
obj3.exec()