const ValidaSituação = (a) => a<2 ? 'Aprovado' : a<4 ? 'Lista de Espera' : 'Não foi desta vez';

function Concatenar(Strings){
    Strings.reduce((x, texto, i) =>{
        console.log("Aluno: " + texto + " com a situação de " + ValidaSituação(i));
    }, '');
}

Concatenar(["Felipe", "Paulo", "João", "Maria", "Eric", "Mariana"]);