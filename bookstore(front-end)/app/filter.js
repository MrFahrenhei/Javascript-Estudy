const btnFitler = document.querySelectorAll('.btn');
btnFitler.forEach(btn => btn.addEventListener('click', filterBooks));

function filterBooks(){
    const elBtn = document.getElementById(this.id);
    const categoria = elBtn.value;
    let livroFiltrado = categoria == 'disponivel' ? filtrarPorDisponivel() : filtrarPorCategoria(categoria)
    displayLivros(livroFiltrado);
    if(categoria == 'disponivel'){
        const valorTotal = calcTotal(livroFiltrado);
        displayTotalPrice(valorTotal);
    }
}

function filtrarPorCategoria(categoria){
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarPorDisponivel(){
    return livros.filter(livro => livro.quantidade > 0);
}

function displayTotalPrice(valorTotal){
    elValTotal.innerHTML += `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}