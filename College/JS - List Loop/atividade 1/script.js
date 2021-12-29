function entrar(){
    nome = document.getElementById("user").value;
    senha = document.getElementById("senha").value;
    if (nome == senha) {
        document.getElementById("result").innerHTML = "Não pode o user ser o mesmo de senha";
        return false;
    } else {
        document.getElementById("result").innerHTML = "Safo."
    }
}