import { Negociacao } from "../models/Negociacao.js";
export class NegociacoesService {
    obterNegociacoes() {
        return fetch('http://localhost:8080/dados')
            .then(res => res.json())
            .then((dados) => {
            return dados.map(dadoHoje => {
                return new Negociacao(new Date(), dadoHoje.vezes, dadoHoje.montante);
            });
        });
    }
}
//# sourceMappingURL=negociacoes-service.js.map