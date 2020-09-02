let peso : number = 60;
let altura : number = 1.83 * 1.83;

let calculo = peso / altura;

const imc = (calculo) => calculo < 18.5 ? "Peso abaixo do normal" : calculo < 24.9 ? "Peso ideal" : 
                        calculo < 29.9 ? "Acima do peso" : calculo < 34.9 ? "Obesidade Grau I" :
                        calculo < 40 ? "Obesidade Grau II" : "Obesidade Grau III"

console.log(imc(calculo));