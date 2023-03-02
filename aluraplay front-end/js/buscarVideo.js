import { conectaAPI } from "./conectaAPI.js";
import construirCard from "./mostrarVideos.js";

async function buscarVideo(evento){
    evento.preventDefault();

    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const buscar = await conectaAPI.buscarVideo(dadosDePesquisa);

    const lista = document.querySelector("[data-lista]");

    while (lista.firstChild){
        lista.removeChild(lista.firstChild);
    }

    buscar.forEach(elemento => lista.appendChild(
        construirCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)
        ));
    if(buscar.length == 0){
        lista.innerHTML += `<h2 class="mensagem__titulo">Não existem videos com esse termo</h2>`;
    }
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");

botaoDePesquisa.addEventListener("click", evento => buscarVideo(evento));