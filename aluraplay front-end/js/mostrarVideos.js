import { conectaAPI } from "./conectaAPI.js";

const lista = document.querySelector("[data-lista]");

export default function construirCard(titulo, descricao, url, imagem) {
    const video = document.createElement("li");
    video.className = "video__item";
    video.innerHTML = `
    <iframe width="100%" height="72%" src="${url}"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    <div class="descricao-video">
        <img src="${imagem}" alt="logo canal alura">
        <h3>${titulo}</h3>
        <p>${descricao}</p>
    </div>`

return video;
}

async function listaVideo() {
    try{
    const listaApi = await conectaAPI.listaVideos();
    listaApi.forEach(element => {
        lista.appendChild(construirCard(element.titulo, element.descricao, element.url, element.imagem));
    });
    }catch{
        lista.innerHTML += `<h2 class="Mensagem__titulo">Não foi possível carregar a lista de vídeos</h3>`;
    }
}

listaVideo();