"use strict";
exports.__esModule = true;
exports.Negociacao = void 0;
var negociacao_js_1 = require("../controllers/negociacao.js");
exports.Negociacao = negociacao_js_1.Negociacao;
var Negociacao = /** @class */ (function () {
    function Negociacao(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
    Negociacao.prototype.adiciona = function () {
        var negociacao = new negociacao_js_1.Negociacao();
    };
    return Negociacao;
}());
exports.Negociacao = Negociacao;
