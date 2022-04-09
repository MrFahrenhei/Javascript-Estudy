const cliente = { 
    nome: "Vinícius",
    idade: 21,
    cpf: "343534523423",
    email: "contato@hotmail.com",
    tel:["53543534653", "35453453454"]
}

cliente.tel.forEach(contato => console.log(`Contato: ${contato}`));

console.log(cliente);
