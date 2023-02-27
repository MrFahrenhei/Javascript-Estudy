// let consultaCEP = fetch('https://viacep.com.br/ws/01001000/json/')
//     .then(resposta => resposta.json())
//     .then(r => {
//         if (r.erro){
//             throw Error('esse cep não existe');
//         }else{
//             console.log(r);
//         }
//     })
//     .catch(erro => console.log(erro))
//     .finally(mensagem => console.log('processamento concluide'));
async function buscaEndereco(cep){
    let mensagemError = document.getElementById('error');
    mensagemError.innerHTML = '';
    try{
    let consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    let jsonCEP = await consultaCEP.json();
    let cidade = document.getElementById("cidade");
    let logradouro = document.getElementById('endereco');
    let estado = document.getElementById('estado');
    let bairro = document.getElementById('bairro');

    cidade.value = jsonCEP.localidade;
    logradouro.value = jsonCEP.logradouro;
    estado.value = jsonCEP.uf;
    bairro.value = jsonCEP.bairro;
    console.log(jsonCEP);
    return jsonCEP;
    }catch(error){
        mensagemError.innerHTML = `<p>CEP inválido, tente novamente!</p>`
        console.log(error);
    }
}
//let ceps = ['01001000', '85805610'];
//let conjuntoCEPs = ceps.map(valores => buscaEndereco(valores));
//Promise.all(conjuntoCEPs).then(respostas => console.log(respostas));
//buscaEndereco();

let cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));