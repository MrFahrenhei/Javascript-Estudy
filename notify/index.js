    const messages = [
    'App Number7',
    'Não esqueça de baixar nosso app'];
    
    const close = document.getElementById('close');
    const container = document.getElementById('container');
    const popup = document.getElementById('popup');
    init();

    function init(){
        console.log("Iniciou....")
        let storedTerm = sessionStorage.getItem('term');
        if(!storedTerm){
            storedTerm = 0;
            sessionStorage.setItem('term', 0);
        }
        setMode(storedTerm);
    }

    function setMode(term){
        console.log("Validando....");
        if(term == 0){
            console.log("Session está vazia")
            createNotification();
        }else if(term == 1){
            console.log("Session está preenchida");
        }
    }

    function createNotification() {
        container.classList.add('active');
        const notif = document.createElement("div");
    
        notif.innerHTML = `
            <h1>${messages[0]}</h1>
            <p>
               ${messages[1]}</div>
            </p>`;
    
        popup.appendChild(notif);
    
        //setTimeout(() => {
        //   container.remove();
        // }, 2000);
       }
        close.addEventListener('click', () => {
            removeNotification();
        });

    function removeNotification(){
        let term = sessionStorage.getItem('term');
        if(container.classList.contains('active')){
            container.classList.remove('active');
            if(term){
                let newTerm = term == 0 ? 1 : 0;
                setMode(newTerm);
                sessionStorage.setItem('term', newTerm);
            } 
        }
    }
    
    
