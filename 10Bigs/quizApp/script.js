let list = Array.from(document.querySelectorAll("li"));

list.map((li) => {
    li.addEventListener("click", () => action(li));
    window.onload = (() => action(li));
  });

function changeColor(colors){
    let answer = li.querySelector("[type='radio']");
    li.style.background = "orange";
    for(let i = 0; i < answer.length; i++){
    //     answer[i].className = answer[i].className.replace("activer", "");
    }
    // colors.currentTarget.className += " active"; 
}
// answer.addEventListener('change', (e) => {
//     this.getAttribute("orange");
//     li.parentElement.style.background('orange', e.target.checked);
// });

const quizData = [
    {
        questions: 'De 1 a 5, quanto você sabe exatamente sobre a FONTE (de onde vieram) 100% dos seus leads e prospects num mês?',
        choises: [
            'Não faço a mínima ideia das origens dos nossos leads',
            'Sei de uma fonte dos meus leads, mas não representa nem 10%  dos que chegam na base',
            'Tenho a maioria das nossas fontes mapeadas, mas não sei quantos leads chegam por cada uma',
            'As minhas fontes são bem definidas, mas ainda não tenho certeza se 100% dos leads chegam por elas.',
            'Sei de 98% das fontes dos meus leads, mas um ou outro sempre surgem e não sei de onde.'
        ],
        weights: [1,5,10,15,20]
    },{
        questions: 'Quais relatórios que você tem para medir resultados e eficiência das suas campanhas de prospecção?',
        choises: [
            'Não tenho nem um relatório para medir resultados.',
            'Tenho apenas 1 relatório, mas ainda muito confuso.',
            'Tenho alguns relatórios, mas ainda sinto que faltam números de resultados.',
            'Tenho relatório de 80% das campanhas de prospecção, mas não são tão claros.',
            'Tenho todos os relatórios das campanhas de prospecção, mas não são exatos.'
        ],
        weights: [1,5,10,15,20]
    },{
        questions: 'Com que frequência você acha que seus projetos e tarefas demoram muito mais do que o previsto originalmente?',
        choises: [
            'Não tenho nem um relatório para medir resultados.',
            'Tenho apenas 1 relatório, mas ainda muito confuso.',
            'Tenho alguns relatórios, mas ainda sinto que faltam números de resultados.',
            '',''
        ],
        weights: [1,5,10]
    },{
        questions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rrem ipsum dolor sit amet, consectetur consectetur adipiscing elit?',
        choises: [
            'Nunca. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'As Vezes, Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Sempre, Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            '',''
        ],
        weights: [1,5,10]
    },{
        questions: 'Como está o seu planejamento e cronograma de ações específicas de prospecção de novos clientes?',
        choises: [
            'Não faço a mínima ideia.',
            'Não sei muito bem, mas conheço alguém que sabe.',
            'Eu sei um pouco sobre isso, mas gostaria de saber mais.',
            'Eu conheço bem esse ponto, mas sinto que poderia dominar mais o assunto.',
            'Eu tenho tudo sobre controle, mas queria aumentar meu conhecimento sobre.'
        ],
        weights: [1,5,10,15,20]
    },{
        questions: 'Como é a definição clara, direta, objetiva do seu PCI (perfil de cliente ideal)?',
        choises: [
            'Não faço a mínima ideia.',
            'Não sei muito bem, mas conheço alguém que sabe.',
            'Eu sei um pouco sobre isso, mas gostaria de saber mais.',
            'Eu conheço bem esse ponto, mas sinto que poderia dominar mais o assunto.',
            'Eu tenho tudo sobre controle, mas queria aumentar meu conhecimento sobre.'
        ],
        weights: [1,5,10,15,20]
    },{
        questions: 'Que nota você daria para a velocidade da sua equipe de vendas no fechamento de vendas / aproveitamento de oportunidades nas campanhas de prospecção?',
        choises: [
            'Não faço a mínima ideia.',
            'Não sei muito bem, mas conheço alguém que sabe.',
            'Eu sei um pouco sobre isso, mas gostaria de saber mais.',
            'Eu conheço bem esse ponto, mas sinto que poderia dominar mais o assunto.',
            'Eu tenho tudo sobre controle, mas queria aumentar meu conhecimento sobre.'
        ],
        weights: [1,5,10,15,20]
    },{
        questions: 'Que nota você daria para a forma como sua equipe de vendas consegue aproveitar ao máximo, em R$, as oportunidades que surgem ao atender novos leads/prospects?',
        choises: [
            'Não faço a mínima ideia.',
            'Não sei muito bem, mas conheço alguém que sabe.',
            'Eu sei um pouco sobre isso, mas gostaria de saber mais.',
            'Eu conheço bem esse ponto, mas sinto que poderia dominar mais o assunto.',
            'Eu tenho tudo sobre controle, mas queria aumentar meu conhecimento sobre.'
        ],
        weights: [1,5,10,15,20]
    },{
        questions: 'Que nota você daria para os processos internos de prospecção da sua empresa com foco em descobrir e testar novas formas e novos canais de prospecção? (1: fazemos sempre a mesma coisa / 5: testamos novas formas e novos canais com frequência)',
        choises: [
            'Não faço a mínima ideia.',
            'Não sei muito bem, mas conheço alguém que sabe.',
            'Eu sei um pouco sobre isso, mas gostaria de saber mais.',
            'Eu conheço bem esse ponto, mas sinto que poderia dominar mais o assunto.',
            'Eu tenho tudo sobre controle, mas queria aumentar meu conhecimento sobre.'
        ],
        weights: [1,5,10,15,20]
    },{
        questions: 'Que nota você daria para os custos atuais de novos clientes - ou seja, quanto você investe para atrair um novo cliente? (1: deficitário/insatisfeito / 5: super lucrativo/satisfeito)',
        choises: [
            'Não faço a mínima ideia.',
            'Não sei muito bem, mas conheço alguém que sabe.',
            'Eu sei um pouco sobre isso, mas gostaria de saber mais.',
            'Eu conheço bem esse ponto, mas sinto que poderia dominar mais o assunto.',
            'Eu tenho tudo sobre controle, mas queria aumentar meu conhecimento sobre.'
        ],
        weights: [1,5,10,15,20]
    },{
        questions: 'De 1 a 5, que nota você daria para a quantidade e qualidade de novos negócios mensais vindos da prospecção de novos clientes?',
        choises: [
            'Não faço a mínima ideia.',
            'Não sei muito bem, mas conheço alguém que sabe.',
            'Eu sei um pouco sobre isso, mas gostaria de saber mais.',
            'Eu conheço bem esse ponto, mas sinto que poderia dominar mais o assunto.',
            'Eu tenho tudo sobre controle, mas queria aumentar meu conhecimento sobre.'
        ],
        weights: [1,5,10,15,20]
    },{
        questions: 'De 1 a 5, que nota você daria para a disciplina e consistência da equipe nas ações de prospecção? (1: só fazem quando alguém manda (e olhe lá) / 5: é prioridade e faz parte das rotinas e processos de toda a equipe).',
        choises: [
            'Não faço a mínima ideia.',
            'Não sei muito bem, mas conheço alguém que sabe.',
            'Eu sei um pouco sobre isso, mas gostaria de saber mais.',
            'Eu conheço bem esse ponto, mas sinto que poderia dominar mais o assunto.',
            'Eu tenho tudo sobre controle, mas queria aumentar meu conhecimento sobre.'
        ],
        weights: [1,5,10,15,20]
    },{
        questions: 'Para finalizar, conte qual a maior dificuldade da sua equipe no que diz respeito a prospecção?',
        choises: [
            'Não faço a mínima ideia.',
            'Não sei muito bem, mas conheço alguém que sabe.',
            'Eu sei um pouco sobre isso, mas gostaria de saber mais.',
            'Eu conheço bem esse ponto, mas sinto que poderia dominar mais o assunto.',
            'Eu tenho tudo sobre controle, mas queria aumentar meu conhecimento sobre.'
        ],
        weights: [1,5,10,15,20]
    },
];

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const e_text = document.getElementById('e_text');

const submitBtn = document.getElementById('submit');

let currentQuestion = 0;

loadQuiz();

function loadQuiz(){
    const currentQuizData = quizData[currentQuestion];
    questionEl.innerHTML = currentQuizData.questions;
    a_text.innerText = currentQuizData.choises[0];
    b_text.innerText = currentQuizData.choises[1];
    c_text.innerText = currentQuizData.choises[2];
    d_text.innerText = currentQuizData.choises[3];
    e_text.innerText = currentQuizData.choises[4];


    // console.log(currentQuizData.choises.length);
    
    if (currentQuestion.choises < 5){
        d_text.innerText = '';
        e_text.innerText = '';
    }
    // b_text.innerText = currentQuizData.b;
    // c_text.innerText = currentQuizData.c;
    // d_text.innerText = currentQuizData.d;
    // e_text.innerText = currentQuizData.e;

    
}

submitBtn.addEventListener('click', () => {
    currentQuestion++;
    loadQuiz();
})
