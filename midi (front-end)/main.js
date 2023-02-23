function playSound(id_music){
    document.querySelector(id_music).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let i = 0; i < listaDeTeclas.length; i++){
    const list = listaDeTeclas[i];
    const instrument = list.classList[1];
    const id_audio = `#som_${instrument}`;

    list.onclick = function(){
        playSound(id_audio);
    };

    list.onkeydown = function(event){

        if(event.code === 'Space' || event.code === 'Enter'){
            list.classList.add('ativa');
        }
    }

    list.onkeyup = function(){
        list.classList.remove('ativa');
    }
}