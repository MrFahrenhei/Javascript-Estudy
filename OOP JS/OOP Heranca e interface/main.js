// import { ContaCorrente } from "./Conta/ContaCorrente.js";
// import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
// import { Conta } from "./Conta.js";
// import { ContaSalario } from "./Conta/ContaSalario.js";
import { Cliente } from "./Cliente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Krane", 10000, 1234423532);
diretor.cadastrarSenha("starwars1234@");
const gerente = new Gerente("Michael Scott", 3454, 3454348034);
gerente.cadastrarSenha("123451010");
const cliente = new Cliente("Louis", 324344354, "2345678");

const loginDiretor = SistemaAutenticacao.login(diretor, "starwars1234@");
const loginGerente = SistemaAutenticacao.login(gerente, "123451010");
const loginCliente = SistemaAutenticacao.login(cliente, "2345678");

// const cliente1 = new Cliente("Ricardo", 11122233309);
// const corrente = new ContaCorrente(cliente1, 1001);
// const poupanca = new ContaPoupanca(50, cliente1, 1001);
// const conta = new Conta(0, cliente1, 1001);
// const contSalario = new ContaSalario(cliente1);

// console.log(corrente);
// console.log(poupanca);
// console.log(conta);
// console.log(contSalario);
console.log(loginDiretor, loginGerente, loginCliente);
console.log(loginCliente);