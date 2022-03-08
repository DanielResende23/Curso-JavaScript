// Arrays são definidos  por cochetes, começando pelo indice zero.

const valores = [6, 9.6, 1, 5, 7.8, 5.6]; 
console.log(valores);
console.log(valores[0], valores[2]);
console.log(valores[6]);

valores [6] = 10

console.log(valores);
console.log(valores.length);

valores.push({id: 3}, true, "teste", null);
console.log(valores);

delete valores [0];
console.log(valores)

valores [0] = 6
console.log(typeof valores)

