import { Produto } from "./Produto.js";
import { Vendedor } from "./Vendedor.js";

export class Orcamento{
    _id;
    _data;
    _produto;
    _vendedor;

    constructor(id, data, produto, vendedor){
        this._id = id;
        this._data = data;
        if(produto instanceof Produto){
            this._produto = produto
        }
        if(vendedor instanceof Vendedor){
            this._vendedor = vendedor
        }
    }

    // set produto(newValProd){
    //     if(newValProd instanceof Produto)
    //         this._produto = newValProd
       
    // }
    // set vendedor(newValSeller){
    //     if(newValSeller instanceof Vendedor){
    //         this._vendedor = newValSeller
    //     }
    // }

    get id(){
        return this._id;
    }
    get data(){
        return this._data;
    }
    get produto(){
        return this._produto;
    }
    get vendedor(){
        return this._vendedor;
    }
}