function aplicarDesconto(livros){
    const disc = 0.3;
    livrosDesconto = livros.map(livro =>{
        return {...livro, preco: livro.preco - (livro.preco * disc)}
    });
    return livrosDesconto
}