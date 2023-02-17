import User from "./User.js";

export default class Docente extends User{
    constructor(name, mail, birth, role = 'docente', ativo = true){
        super(name, mail, birth, role, ativo)
    }

    aprover(guy, course){
        return `estudante ${guy} aprovada no curso de ${course}.`
    }
}

// const newDocente = new Docente('Mariana', 'mariana@company.com', '2012-04-12');
// console.log(newDocente);
// console.log(newDocente.displayInfo());
// console.log(newDocente.aprover('Juliana', 'JS'));
