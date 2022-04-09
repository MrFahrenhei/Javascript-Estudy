// let nota1 = 10;
// let nota2 = 6.5;
// let nota3 = 8;
// let nota4 = 7.5;
//let media = (nota1 + nota2 + nota3 + nota4)/4;

const notas = [10, 6.5, 8, 7.5];
// let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
let notasLength = notas.length;
let soma = 0;
for(let i = 0; i < notasLength; i++){
    soma += notas[i];
}
let media = (soma/notasLength);
console.log(`Soma total de notas é ${soma} e a média delas fica ${media}`);