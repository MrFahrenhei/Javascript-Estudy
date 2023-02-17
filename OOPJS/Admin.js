import User from "./User.js";

export default class Admin extends User{
    constructor(name, mail, birth, role = 'admin', ativo = true){
        super(name, mail, birth, role, ativo)
    }

    createCourse(nameCourse, vacancy){
        return `Curso de ${nameCourse} criado com ${vacancy} vagas`;
    }
}

// const newAdmin = new Admin('George', 'george@company.com', '03-05-2023');
// console.log(newAdmin);
// console.log(newAdmin.displayInfo());

// console.log(newAdmin.createCourse('PHP', 12));