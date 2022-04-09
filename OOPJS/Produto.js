export class Produto{
    _id;
    _nome;
    _tipo;
    _modelo;
    _price;

    constructor(id, nome, tipo, modelo, price){
        this._id = id;
        this._nome = nome;
        this._tipo = tipo;
        this._modelo = modelo;
        this._price = price;
    }

    get id(){
        return this._id;
    }
    get nome(){
        return this._nome;
    }
    get tipo(){
        return this._tipo;
    }
    get modelo(){
        return this._modelo;
    }
    get price(){
        return this._price;
    }
}
