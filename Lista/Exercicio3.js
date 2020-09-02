
//Não consegui com reduce e arrow.

var arr = [];
var media = 0;
var soma = 0
var ordenacao = [];

for (var i = 0; i < 100; i++){
    arr.push(Math.round(Math.random() * (1, 1000)));
    soma += arr[i];
    media = soma / arr.length;
    ordenacao = arr.sort();
}

console.log(`Array gerado: ${arr}`);
console.log(`Media: ${media}`);
console.log(`Soma: ${soma}`)
console.log(`Ordenado: ${ordenacao}`)