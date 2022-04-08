const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const mediaAzedos = [10, 7, 9 ,6 ];

let listaNotasDosAzedos = [alunos, mediaAzedos];

const exibeAzedos = (azedos) => {
    if (listaNotasDosAzedos[0].includes(azedos)){
        let theIndex = listaNotasDosAzedos.indexOf(azedos)
        return listaNotasDosAzedos[0][theIndex] + ", Sua média é " + listaNotasDosAzedos[1][theIndex]
    }else{
        return "Aluno não cadastrado";
    }
}
console.log(exibeAzedos("Juliana"));