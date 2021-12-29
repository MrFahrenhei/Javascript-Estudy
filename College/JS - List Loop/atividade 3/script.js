function entrar(){
    let paisA = 8000;
    let paisB = 20000;
    const CresA = 0.06;
    const CresB = 0.03;
    let anos = 0;
    while(paisA < paisB){
        paisA = paisA+(paisA*CresA);
        paisB = paisB+(paisB*CresB);
        anos++;
    }
    if(paisA >= paisB){
        document.getElementById("result").innerHTML = anos+" anos";
    }
}