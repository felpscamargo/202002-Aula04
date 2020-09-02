
//Não consegui com reduce e arrow.

var impar = 0;
var par = 0;

for(var i = 1; i <= 1000; i++){
    //ImparOuPar = (i) => i % 2 == 1 ? impar += i : par += i
    
    if(i % 2 == 1){
        impar += i;
    }
    else{
        par += i;
    }
}

console.log(`Total números impares = ${impar}`);
console.log(`Total números pares = ${par}`);