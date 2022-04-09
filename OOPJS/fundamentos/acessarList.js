const cliente = { 
    nome: "Vinícius",
    idade: 21,
    cpf: "343534523423",
    email: "contato@hotmail.com"
}

const keys = ["nome", "idade", "cpf", "email"]

console.log(cliente[keys[0]]);

keys.forEach(basic => console.log(cliente[basic]));