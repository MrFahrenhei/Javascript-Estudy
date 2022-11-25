const notas = [10, 6.5, 8, 7.5];

let notasLength = notas.length;

let soma = 0;

notas.forEach ( nota => {
    soma += nota
});

let media = (soma/notasLength);
console.log(`Soma total de notas é ${soma} e a média delas fica ${media}`);