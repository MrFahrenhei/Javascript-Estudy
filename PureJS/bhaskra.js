function discriminante(a, b, c){
    let main = ((b*b) - (4*a*c));
    return Math.sqrt(main);
}

function bhas(a, b, delta){
    let x1 = (-b-delta)/(2*a);
    let x2 = (-b+delta)/(2*a);
    let mensagem = `Positivo deu ${x2} e negativo deu ${x1}`;
    return mensagem;
}