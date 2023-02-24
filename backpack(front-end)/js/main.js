const form = document.getElementById("novoItem");
const lista = document.getElementById('lista');
const itens = JSON.parse(localStorage.getItem("itens")) || [];

itens.forEach((e)=>{
    criarElemento(e);
})

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let nome = e.target.elements['nome'];
    let quantidade = e.target.elements['quantidade'];

    const existe = itens.find(el => el.nome === nome.value);
    
    const itemAtual = { 
        "nome": nome.value,
        "quantidade": quantidade.value
    };
     
    if(existe){
        itemAtual.id = existe.id;

        atualizaElemento(itemAtual);

        itens[itens.findIndex(el => el.id === existe.id)] = itemAtual;

    }else{
        itemAtual.id = itens[itens.length - 1] ? (itens[itens.length-1]).id + 1 : 0
        
        criarElemento(itemAtual);

        itens.push(itemAtual);
    }
       
    localStorage.setItem("itens", JSON.stringify(itens));

    nome.value = '';
    quantidade.value = '';
});


function criarElemento(itens){
    const novoItem = document.createElement('li');
    novoItem.classList.add('item');

    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = itens.quantidade;
    numeroItem.dataset.id = itens.id
    novoItem.appendChild(numeroItem);
    
    novoItem.innerHTML += itens.nome;

    novoItem.appendChild(botaoDeleta(itens.id));

    lista.appendChild(novoItem);
}

function atualizaElemento(item){
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade
}

function botaoDeleta(id){
    const elementoBotao = document.createElement("button");
    elementoBotao.innerText = "x"

    elementoBotao.addEventListener("click", function(){
        deletaElemento(this.parentNode, id);
    });

    return elementoBotao;
}

function deletaElemento(tag, id){
    tag.remove()

    itens.splice(itens.findIndex(e => e.id === id),1);

    localStorage.setItem("itens", JSON.stringify(itens));
}