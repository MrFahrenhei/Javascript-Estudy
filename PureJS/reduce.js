const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8 ,9 ,5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function mediaSala(notasSala){
    const sumAll = notasSala.reduce(
        (acum, atual) => atual + acum,0);
        return sumAll/notasSala.length
}

console.log(`Media da sala de js ${mediaSala(salaJS)}`);
console.log(`Media da sala de java ${mediaSala(salaJava)}`);
console.log(`Media da sala de python ${mediaSala(salaPython)}`);