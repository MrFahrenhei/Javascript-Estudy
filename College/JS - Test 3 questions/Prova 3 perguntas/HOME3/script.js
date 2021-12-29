function Cadastrar() {
	let m1 = document.getElementsByClassName("m1");
	let m2 = document.getElementsByClassName("m2");
	var q1 = document.querySelector("#q1").value;
	var q2 = document.querySelector("#q2").value;
	var select = document.querySelector("#select");
	m1[select.selectedIndex].innerHTML = q1
	m2[select.selectedIndex].innerHTML = q2
}
function Calcular() {
	var m1 = document.getElementsByClassName("m1");
	var m2 = document.getElementsByClassName("m2");
	var meses = document.getElementsByClassName("meses");
	var custoM = document.getElementsByClassName("custoM");
	var lucroM = document.getElementsByClassName("lucroM");
	var custo = document.getElementsByClassName("custo");
	var lucro = document.getElementsByClassName("lucro");
	for (quantidade = 0;quantidade < meses.length; quantidade++){

		if((!(m1[quantidade].textContent)) && (!(m2[quantidade].textContent))){}
		else if(!(m1[quantidade].textContent)){
			m1[quantidade].innerHTML = 0
		}
		else if(!(m2[quantidade].textContent)){
			m2[quantidade].innerHTML = 0
		}
		custoSOMADO =
		(parseFloat(m1[quantidade].textContent) * parseFloat(custoM[0].textContent)) +
		(parseFloat(m2[quantidade].textContent) * parseFloat(custoM[1].textContent))
		if (!custoSOMADO){
			custo[quantidade].innerHTML = ""
		}
		else{
			custo[quantidade].innerHTML = custoSOMADO
		}
		lucroSOMADO =
		(parseFloat(m1[quantidade].textContent) * parseFloat(lucroM[0].textContent)) +
		(parseFloat(m2[quantidade].textContent) * parseFloat(lucroM[1].textContent))
		if (!lucroSOMADO){
			lucro[quantidade].innerHTML = ""
		}
		else{
			lucro[quantidade].innerHTML = lucroSOMADO
		}
	}
}
