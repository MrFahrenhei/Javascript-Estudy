function positvoNegativo(){
    let posiNeg;
    num1 = document.getElementById("valor1").value;
        if  (num1 >= 1) { 
            posiNeg = "é positivo";
        } else {
            posiNeg = "é negativo";
        }
        if (num1 == 0){
            posiNeg = "zero";
        }
    document.getElementById("result").innerHTML = posiNeg;
}
function multiploDe(){
    let multiplos
    let num2 = document.getElementById("valor2").value;
    let mod = num2 % 5;
        if (mod == 0){
            multiplos = "é multiplo";
        } else {
            multiplos = "não é multiplo";
        }
    document.getElementById("result1").innerHTML = multiplos;
}
function media(){
    let valorMeio;
    let num3 = document.getElementById("valor3").value;
        if (num3>=100 && num3<=1000){
            valorMeio = "está entre 100 e 1000";
        } else {
            valorMeio = "não está entre 100 e 1000";
        }
    document.getElementById("result2").innerHTML = valorMeio;
}  
function ariti(){
    let varResult;
    let nota1 = parseFloat(document.getElementById("med1").value)
    let nota2 = parseFloat(document.getElementById("med2").value);
    let medArit = (nota1 + nota2)/2;
    if (medArit >= 70){
        varResult = "está aprovado";
    } else if (medArit < 40){
        varResult = "está reprovado";
    } else {
        varResult = "precisa fazer exame";
    }
    document.getElementById("result3").innerHTML = varResult;
}

