function verificaChute(chute) {
    const num = +chute;
    
    if(chuteInvalido(num)){
        elementoChute.innerHTML += '<div>valor invalido</div>';
        return
    }

    if(numeroBigger(num)){
        elementoChute.innerHTML += `<div>Valor invalido: fale entre ${menorValor} e ${maiorValor}</div>`;
        return
    }

    if(num === numeroSecreto){
        document.body.innerHTML = `
            <h2>VOCÊ ACERTOU</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `;
    }else if(num > numeroSecreto){
        elementoChute.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `;
    }else {
        elementoChute.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `;
    }
}

function chuteInvalido(num){
    return Number.isNaN(num)
}

function numeroBigger(num){
    return num > maiorValor || num < menorValor 
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})