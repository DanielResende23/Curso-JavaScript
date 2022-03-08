const peso1 = 1.0;
const peso2 = Number ('2.5'); // outra forma de indicar numero

console.log(peso1, peso2);
console.log(Number.isInteger (peso1));
console.log(Number.isInteger (peso2));

const avaliacao1 = 9.6012;
const avaliacao2 = 8.5770;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);
console.log (media.toFixed(2));
console.log (media.toString(2)); // em bínario
console.log (typeof media);