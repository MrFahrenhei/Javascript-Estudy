// const btnClient = document.getElementById('btnClient');
// function addClient(){

//     let Cliente = {
//         // clientName: document.getElementById("nameClient"),
//         // clientTel:  document.getElementById("clientTel"),
//         // clientAdress: document.getElementById("clientAdress"),
//         // clientCPF: document.getElementById("clientCPF")
//         clientName: "John Doe",
//         clientTel:  "+5545999542380",
//         clientAdress: "Rua talz",
//         clientCPF: "85805050"
//     }

// }

// btnClient.addEventListener('click', () => {
//     addClient();
// });

class Cliente {
    id;
    nome;
    cpf;
    tel;
    adress;
}

const cliente1 = new Cliente();

cliente1.id = 1;
cliente1.nome = "Joao";
cliente1.cpf = 12334545654;
cliente1.tel = 451123496843;
cliente1.adress = "Rua talz";

console.log(cliente1);

class Produto{
    id;
    nome;
    tipo;
    modelo;
    price;
}

const produto1 = new Produto();

produto1.id = 1;
produto1.nome = "Placa mãe";
produto1.tipo = "motherboard";
produto1.modelo = "Asus";
produto1.price = 10562;

console.log(produto1);