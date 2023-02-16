// function User(nome, email){
//     this.nome = nome
//     this.email = email

//     this.showInfo = function() {
//         return `${this.nome}, ${this.email}`
//     }
// }

// const newUser = new User("Joao", "joao@mail.com");
// console.log(newUser.showInfo());

// function Admin(role){
//     User.call(this, 'Maicon', 'maicon@mail.com');
//     this.role = role || 'estudante'
// }

// Admin.prototype = Object.create(User.prototype)
// const newUser2 = new Admin('admin');
// console.log(newUser2.showInfo());
// console.log(newUser2.role);

const user = {
    init: function(name, mail){
        this.name = name
        this.mail = mail
    },
    showInfo: function(name){
        return name;
    }
}

const newUser = Object.create(user);
newUser.init('Michael', 'michael@company.com');
// console.log(newUser.showInfo('Michael'));
// console.log(user.isPrototypeOf(newUser));