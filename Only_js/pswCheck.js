function validPSW(str, str2){
    let valido = '';
    let checkPSW = RegExp(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/i);
    let vazio = (/[ ]/);
    (str !== str2) ? valido = ("Não é igual"): 
        (str.length < 5) ? valido = ("mínimo 5 letras") : 
            (!str.match(checkPSW)) ? valido = ("Ao menos 1 caracter especial") :
                (str.match(vazio)) ? valido = ("Não pode haver espaço") : valido = true;     
    return(valido);
}

function isBlank(str){return(!str || str.length === 0);}
function checkEmail(mail){
    let checkEmail = RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i);
    return(mail.match(checkEmail))
}
function checkPSWEquals(str, str2){return(str === str2);}
function checkPSWformat(str){
    let checkPSW = RegExp(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/i);
    return(str.match(checkPSW))
}

let psw1 = "@senha";
let psw2 = "@senha";
let customer_email = 'viniciusvalleb@hotmail.com';
let customer_password = '2';
let customer_name = '3';

function login(){
    if (isBlank(customer_email) || isBlank(customer_password) || isBlank(customer_name)){
        console.log("Está faltando coisa");
    }
    if (!checkEmail(customer_email)){
        console.log("Está errado o email");
    }   
    if (!checkPSWEquals(psw1, psw2)){
        console.log("Senhas não iguais")
    }else if(!checkPSWformat(psw1)){
        console.log("A senha está fora do padrão");
    }else{
        console.log("Pode seguir");
    }
}
login();
