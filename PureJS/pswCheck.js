let psw1 = "@senha";
let psw2 = "@senha";

function validPSW(str, str2){
    let valido = '';
    let checkPSW = RegExp(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/i);
    let vazio = (/[ ]/);
    (str !== str2) ? valido = ("Não é igual"): 
        (str.length < 5) ? valido = ("mínimo 5 letras") : 
            (!str.match(checkPSW)) ? valido = ("Ao menos 1 caracter especial") :
                (str.match(vazio)) ? valido = ("Não pode haver espaço") :  valido = ("Valido");     
    return(valido);
}

console.log(validPSW(psw1,psw2));

