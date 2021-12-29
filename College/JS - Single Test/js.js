
let listaAlunos = [];
function adir(){
    let newAluno =  aluno = {
        nome : document.getElementById("name").value,
        id : parseFloat(document.getElementById("id").value),
        listaGabarito : []
    };
    let newGabarito = gabarito = {
        total : [],
        erros : [],
        acertos : []
    };
    let question1 = document.querySelector('input[type=radio][name=question-1-answers]:checked');
    let question2 = document.querySelector('input[type=radio][name=question-2-answers]:checked');
    let question3 = document.querySelector('input[type=radio][name=question-3-answers]:checked');
    let question4 = document.querySelector('input[type=radio][name=question-4-answers]:checked');
    let question5 = document.querySelector('input[type=radio][name=question-5-answers]:checked');
    let question6 = document.querySelector('input[type=radio][name=question-6-answers]:checked');
    let question7 = document.querySelector('input[type=radio][name=question-7-answers]:checked');
    let question8 = document.querySelector('input[type=radio][name=question-8-answers]:checked');
    let question9 = document.querySelector('input[type=radio][name=question-9-answers]:checked');
    let question10 = document.querySelector('input[type=radio][name=question-10-answers]:checked');

    
    
    if (question1 == document.querySelector('input[type=radio][value=A1]:checked')){
        newGabarito.acertos.push(1);
        newGabarito.total++;
    } else { newGabarito.erros.push(1); }
    //if (question1 != document.querySelector('input[type=radio][value=A]:checked')){
    //    newGabarito.erros.push(1);
    //}
    //
    if (question2 == document.querySelector('input[type=radio][value=C2]:checked')){
        newGabarito.acertos.push(1);
        newGabarito.total++;
    } else { newGabarito.erros.push(1); }
    //if (question2 !== document.querySelector('input[type=radio][value=C]:checked')){
    //    newGabarito.erros.push(1);
    //}
    //
    if (question3 == document.querySelector('input[type=radio][value=E3]:checked')){
        newGabarito.acertos.push(1);
        newGabarito.total++;
    } else { newGabarito.erros.push(1); }
    //if (question3 !== document.querySelector('input[type=radio][value=E]:checked')){
    //    newGabarito.erros.push(1);
    //}
    //
   if (question4 == document.querySelector('input[type=radio][value=B4]:checked')){
        newGabarito.acertos.push(1);
        newGabarito.total++;
    } else { newGabarito.erros.push(1); }
    //if (question4 !== document.querySelector('input[type=radio][value=B]:checked')){
    //    newGabarito.erros.push(1);
    //}
    //
    if (question5 == document.querySelector('input[type=radio][value=D5]:checked')){
        newGabarito.acertos.push(1);
        newGabarito.total++;
    } else { newGabarito.erros.push(1); }
   //if (question5 !== document.querySelector('input[type=radio][value=D]:checked')){
    //    newGabarito.erros.push(1);
    //}
    //
    if (question6 == document.querySelector('input[type=radio][value=A6]:checked')){
        newGabarito.acertos.push(1);
        newGabarito.total++;
   } else { newGabarito.erros.push(1); }
   //if (question6 !== document.querySelector('input[type=radio][value=A]:checked')){
   //     newGabarito.erros.push(1);
    //}
    //
   if (question7 === document.querySelector('input[type=radio][value=E7]:checked')){
        newGabarito.acertos.push(1);
        newGabarito.total++;
    } else { newGabarito.erros.push(1); }
  // if (question7 !== document.querySelector('input[type=radio][value=E]:checked')){
     //   newGabarito.erros.push(1);
    //}
    //
    if (question8 === document.querySelector('input[type=radio][value=B8]:checked')){
        newGabarito.acertos.push(1);
        newGabarito.total++;
    } else { newGabarito.erros.push(1); }
   //if (question8 !== document.querySelector('input[type=radio][value=B]:checked')){
    //    newGabarito.erros.push(1);
    //}
    //
    if (question9 === document.querySelector('input[type=radio][value=D9]:checked')){
        newGabarito.acertos.push(1);
        newGabarito.total++;
    } else { newGabarito.erros.push(1); }
   //if (question9 !== document.querySelector('input[type=radio][value=D]:checked')){
    //    newGabarito.erros.push(1);
   // }
    //
    if (question10 === document.querySelector('input[type=radio][value=C10]:checked')){
        newGabarito.acertos.push(1);
        newGabarito.total++;
   } else { newGabarito.erros.push(1); }
    //if (question10 !== document.querySelector('input[type=radio][value=C]:checked')){
    //    newGabarito.erros.push(1);
    //}
    //
    listaAlunos.push(newAluno);
    for (let index = 0; index < Object.values(listaAlunos).length; index++) {
        newAluno.listaGabarito.push(newGabarito);
        document.getElementById("result1").innerHTML = (Object.values(listaAlunos)[index].nome);
        document.getElementById("result2").innerHTML = "Nota final: "+newGabarito.acertos.length+" Pontos"
        console.log(listaAlunos);
    }
}