import livros from './lista.js';

let sizeList = livros.length;
let chepear = 0;

for(let now = 0; now < sizeList; now++){
    if(livros[now].price < livros[chepear].price){
        chepear = now;
    }
}
let text = `the cheaper book costs ${livros[chepear].price} and it's called ${livros[chepear].title}`;
console.log(text);