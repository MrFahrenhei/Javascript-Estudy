class cidadao{
    nome = "";
    idade = 0;
    sal = 0;
    sex = 0;
    estado = "";
}
let listaCidadao = []
function entrar(){
    let newCidadao = new cidadao();
    newCidadao.nome = document.getElementById("user").value;
    newCidadao.idade = parseFloat(document.getElementById("idade").value);
    newCidadao.sal = parseInt(document.getElementById("salario").value);
    newCidadao.sex = document.querySelector('input[type=radio][name=gender]:checked');
    newCidadao.estado = document.querySelector('input[type=radio][name=estado]:checked');
    listaCidadao.push(newCidadao);
    if (newCidadao.nome.length < 3){
        document.getElementById("result").innerHTML = "seu nome tem que ter mais de três caracteres";
    }else{document.getElementById("result").innerHTML = "Nome: "+newCidadao.nome;}

    if (newCidadao.idade < 0){
        document.getElementById("result2").innerHTML = "sua idade não pode ser menor que 0";
    }
    if(newCidadao.idade > 150){
       document.getElementById("result2").innerHTML = "sua idade não pode ser maior que 150";
    }else{
        document.getElementById("result2").innerHTML = "idade: "+newCidadao.idade;
    }
    document.getElementById("result3").innerHTML = "salário: "+"R$"+newCidadao.sal+" Reais";
    document.getElementById("result4").innerHTML = "sexo: "+newCidadao.sex.id;
    document.getElementById("result5").innerHTML = "estado civil: "+newCidadao.estado.id;
    document.getElementById("result6").innerHTML = "Adicionados "+listaCidadao.length+" cidadãos";
    console.log(newCidadao);

}