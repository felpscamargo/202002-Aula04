var aposta = 3;
var num = Math.round(Math.random() * (1, 6) + 1);

const acertou = (aposta, num) => aposta == num ? "Você acertou!" : "Você errou!"

console.log(`Sua aposta: ${aposta}`);
console.log(`Numero: ${num}`);
console.log(acertou(aposta, num));