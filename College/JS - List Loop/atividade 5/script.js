class numero{
    num = 0;
}

let listaNumber = [];
function entrar(){
    let newI = new numero();
    newI.num = 1;
    while(newI.num <= 20){
        listaNumber.push(newI.num);
        newI.num++
    }
    if (newI.num >= 20){
       console.log(listaNumber); 
    }


    // print de cima para baixo
    //let i;
    //for (i = 1; i <= 20; i++){
    //      console.log(i);
    //    document.getElementById("result").innerHTML += i;
    //}
}