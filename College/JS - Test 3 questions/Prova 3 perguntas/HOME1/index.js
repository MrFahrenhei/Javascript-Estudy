var vetor1 = [];
var vetor2 = [];
var vetorR = [];
function exerc1() {
  let v1 = parseFloat(document.getElementById("vetor1").value);
  let v2 = parseFloat(document.getElementById("vetor2").value);
  if (!(vetor1.length == 10)) {
    vetor1.push(v1)
  }
  if (!(vetor2.length == 10)) {
    vetor2.push(v2)
  }
  document.getElementById("result2").innerHTML = vetor1
  document.getElementById("result1").innerHTML = vetor2
}
function resultado() {
  for (let index = 0; index < vetor1.length; index++) {
    vetorR.push(vetor1[index] * vetor2[index]);
  }
  let soma = 0;
  for (let i = 0; i < vetorR.length; i++) {
    soma = soma + vetorR[i]; 
  }
  console.log(soma);
  document.getElementById("result3").innerHTML = soma;
}
function redirect(){
  window.location.href='index1.html';
}
