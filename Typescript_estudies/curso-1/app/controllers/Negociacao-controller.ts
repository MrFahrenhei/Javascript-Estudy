import { domInjector } from "../decorators/dom-injector.js";
import { inspect } from "../decorators/inspect.js";
import { logarTempoDeExecucao } from "../decorators/log-tempo-execucao.js";
import { DiaDaSemana } from "../enums/dia-da-semana.js";
import { Negociacao } from "../models/Negociacao.js";
import { Negociacoes } from "../models/Negociacoes.js";
import { NegociacoesService } from "../services/negociacoes-service.js";
import { imprimir } from "../utils/imprimir.js";
import { MensagemView } from "../views/mensagem-views.js";
import { NegociacaoView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    
    @domInjector('#data')
    private inputData: HTMLInputElement;
    @domInjector('#quantidade')
    private inputQuantidade: HTMLInputElement;
    @domInjector('#valor')
    private inputValor: HTMLInputElement;
    
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacaoView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');
    private negociacaoService = new NegociacoesService();

    constructor(){
        //this.inputData = <HTMLInputElement>document.querySelector('#data'); 
        //this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
        //this.inputValor = document.querySelector('#valor') as HTMLInputElement;
        this.negociacoesView.update(this.negociacoes);
    }
    @inspect
    @logarTempoDeExecucao()
    public adiciona(): void{
        /*
        * Testando comentário
        */
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        )

        if(!this.diaUtil(negociacao.data)){
            this.mensagemView.update('Apenas negociações em dias úteis são aceitas');  return;         
        }
        this.negociacoes.adiciona(negociacao);
        imprimir(negociacao);
        this.limparForm();
        this.atualizaView();
    }

    public importaDados(): void{
        this.negociacaoService.obterNegociacoes()
            .then(negociacoesHoje => {
                    return negociacoesHoje.filter(negociacaoDeHoje => {
                        return !this.negociacoes.lista()
                        .some(
                            negociacao => 
                            negociacao.ehIgual(negociacaoDeHoje)
                        );
                    });
            })
            .then(negociacoesHoje => {
                for(let negociacao of negociacoesHoje){
                    this.negociacoes.adiciona(negociacao);
                }
                this.negociacoesView.update(this.negociacoes);
            }); 
    }

    private diaUtil(date: Date){
        return date.getDay() > DiaDaSemana.DOMINGO && date.getDay() < DiaDaSemana.SABADO;
    }

    private limparForm(): void{
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaView(): void{
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso');
    }

    
}