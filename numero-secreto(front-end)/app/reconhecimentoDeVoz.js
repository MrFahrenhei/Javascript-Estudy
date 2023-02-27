const elementoChute = document.getElementById('chute');

window.SpeechRecognition = webkitSpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'

recognition.start();

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    chute = e.results[0][0].transcript;
    exibirChuteNaTela(chute);
    verificaChute(chute);
}

function exibirChuteNaTela(chute){
    elementoChute.innerHTML=`
        <div>você disse</div>
        <span class="box">${chute}</span>
    `;
}

recognition.addEventListener('end', ()=> recognition.start())