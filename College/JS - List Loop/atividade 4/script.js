function entrar(){
    let paisA = parseFloat(document.getElementById("paisA").value);
    let paisB = parseFloat(document.getElementById("paisB").value);
    const CresA = parseFloat(document.getElementById("cresA").value)/100;
    const CresB = parseFloat(document.getElementById("cresB").value)/100;
    let anos = 0;
    while(paisA < paisB){
        paisA = paisA+(paisA*CresA);
        paisB = paisB+(paisB*CresB);
        anos++;
    }
    while(paisB < paisA){
        paisA = paisA+(paisA*CresA);
        paisB = paisB+(paisB*CresB);
        anos++;
    }
    if(paisA > paisB){
        document.getElementById("result").innerHTML = anos+" anos";
    }
    if(paisB > paisA){
        document.getElementById("result").innerHTML = anos+" anos";
    }
}