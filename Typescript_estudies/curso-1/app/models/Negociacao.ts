import { Modelo } from "../interfaces/modelo.js";

export class Negociacao implements Modelo<Negociacao>{
   constructor(
      private _data: Date,
      public readonly _quantidade: number,
      public readonly _valor: number
   ){}

   get volume(): number{
    return this._quantidade * this._valor;
   }

   get data(): Date{
      const data = new Date(this._data.getTime());
      return this._data;
   }

   public paraTexto(): string{
      return `
         Data: ${this.data},
         Quantidade: ${this._quantidade},
         Valor: ${this._valor}   
      `;
   }

   public ehIgual(negociacao: Negociacao): boolean{
      return this.data.getDate() === negociacao.data.getDate()
         && this.data.getMonth() === negociacao.data.getMonth()
         && this.data.getFullYear() === negociacao.data.getFullYear();
   }

   public static criaDe(dateString: string, quantidadeString: string, valorString: string): Negociacao{
      const exp = /-/g;
      const date = new Date(dateString.replace(exp, ','));
      const quantidade = parseInt(quantidadeString);
      const valor = parseFloat(valorString);
      return new Negociacao(date, quantidade, valor);
   }
}