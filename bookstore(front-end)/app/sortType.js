let btnOrdernarPreco = document.getElementById('btnOrdenarPorPreco');

btnOrdernarPreco.addEventListener('click', ordernarPorPreco);

function ordernarPorPreco() {
    let livrosOrdenados  = livros.sort((a, b) => a.preco - b.preco)
    displayLivros(livrosOrdenados);
}