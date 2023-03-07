import { NegociacoesDia } from "../interfaces/negociacaoDia.js";
import { Negociacao } from "../models/Negociacao.js";

export class NegociacoesService {
    
    public obterNegociacoes(): Promise<Negociacao[]>{
        return fetch('http://localhost:8080/dados')
            .then(res => res.json())
            .then((dados: NegociacoesDia[]) => {
                return dados.map(dadoHoje => {
                    return new Negociacao(
                        new Date(), 
                        dadoHoje.vezes, 
                        dadoHoje.montante
                    )
                })
            })
    }
}