    const boneco = document.querySelector('.boneco');
    const pipe = document.querySelector('.pipe');

    const jump = () =>{
        boneco.classList.add('jump');

        setTimeout(() =>{
            boneco.classList.remove('jump');
        }, 600);
    }

    const gameOver = setInterval(() =>{
        const pipePosition = pipe.offsetLeft;
        const bonecoPosition = window.getComputedStyle(boneco).bottom;
        const bonecoFormat = +bonecoPosition.replace('px', '');



        if(pipePosition <= 120 && pipePosition > 0 && bonecoFormat < 80){
            // pipe.classList.add('stopPipe');
            // boneco.classList.add('stopBoneco');

            pipe.style.animation = 'none';
            pipe.style.animation = `${pipePosition}px`;

            boneco.style.animation = 'none';
            boneco.style.bottom = `${bonecoFormat}px`;

            boneco.src = 'src/imgs/game-over.png';
            // boneco.style.width = '75px';
            // boneco.style.marginLeft = '50px';
            boneco.classList.add('dead');

            clearInterval(gameOver);
        }
    },10)
    document.addEventListener('keydown', jump);