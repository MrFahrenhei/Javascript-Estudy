async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoJSON = await conexao.json();
    return conexaoJSON;   
}

async function criarVideo(titulo, descricao, url, imagem){
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mill visualizações`,
            url: url,
            imagem: imagem
        })
    });   
    if(!conexao.ok){
        throw new Error("Não foi possível enviar o vídeo");
    }
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function buscarVideo(termo){
    const conexao = await fetch(`http://localhost:3000/videos?q=${termo}`);
    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}

export const conectaAPI = {
    listaVideos,
    criarVideo,
    buscarVideo
}