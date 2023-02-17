export default class User {
    #name
    #mail
    #birth
    #role
    #ativo
    constructor(name, mail, birth, role, ativo = true){
        this.#name = name
        this.#mail = mail
        this.#birth = birth
        this.#role = role || 'estudante'
        this.#ativo = ativo
    }

    get name(){
        return this.#name
    }
    get mail(){
        return this.#mail
    }
    get birth(){
        return this.#birth
    }  
    get role(){
        return this.#role
    }  
    get ativo(){
        return this.#ativo
    }

    set name(newName){
        this.#name = newName
    }


    set mail(newMail){
        this.#mail = newMail
    }

    set birth(newBirth){
        this.#birth = newBirth
    }

    set role(newRole){
        this.#role = newRole
    }

    set ativo(newAtivo){
        this.#ativo = newAtivo
    }
  
    displayInfo(){
        return `${this.name}, ${this.mail}, ${this.birth}, ${this.role}${this.ativo}`;
    }

}

//const newUser = new User('Michael', 'michael@company.com', '01-01-2023')
//console.log(newUser);
//console.log(newUser.displayInfo());
