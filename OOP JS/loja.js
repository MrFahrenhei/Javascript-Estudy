import {Cliente} from "./Cliente.js"
import {Produto} from "./Produto.js"
import {Orcamento} from "./Orcamento.js";
import {Vendedor} from "./Vendedor.js";

const cliente1 = new Cliente();
//const produto1 = new Produto();
//const orcamento1 = new Orcamento();
//const vendedor = new Vendedor();

let numeroProdutos = 0;
let idVendedor = 0;
class SellerList {
    constructor(sellers = []){
        this.list = sellers;
    }
    addSeller(vendedor){
        this.list.push(vendedor);
    }
    getSellerByID(id){
        return this.list.find(vendedor => vendedor.id == id);
    }
}
let sellerList = new SellerList();
sellerList.addSeller(new Vendedor(1, "Marco"));

class ProdutoList{
    constructor(produtos = []){
        this.list = produtos;
    }
    addProduto(produto){
        this.list.push(produto);
    }
    getProdutoById(id){
        return this.list.find(produto => produto.id == id);
    }
}
let produtoList = new ProdutoList();
produtoList.addProduto(new Produto(1, "Placa mãe gamer", "Motherboard", "Asus", 1500));

let produtoList1 = new ProdutoList();
produtoList.addProduto(new Produto(2, "Placa mãe", "Motherboard", "Republic of games", 1400));


cliente1.id = 1;
cliente1.nome = "Joao";
cliente1.cpf = 12334545654;
cliente1.tel = 451123496843;
cliente1.adress = "Rua talz";

// produto1.id = 1;
// produto1.nome = "Placa mãe";
// produto1.tipo = "motherboard";
// produto1.modelo = "Asus";
// produto1.price = 10562;
// vendedor1.id = 1;
// vendedor1.nome = "Marco"

// orcamento1.id = 1;
// orcamento1.data = "Hoje";
// orcamento1.produto = produtoList.getProdutoById(1);
// orcamento1.vendedor = sellerList.getSellerByID(1);

const orcamento1 = new Orcamento(1, "hoje", (produtoList.getProdutoById(1)), (sellerList.getSellerByID(1)));

//console.log(vendedor1);
//console.log(produto1);
//console.log(cliente1);
console.log(orcamento1);
//console.log(sellerList);