const user = {
    name: "John",
    mail: "john@company.com",
    birth: "06/02/2001",
    role: "admin",
    status: true,
    showInfos: function() {
        console.log(this.name, this.mail, this.birth, this.role, this.status)
    }
}

//user.showInfos();

const exibir = function() {
    console.log(this.name);
}

const showName = exibir.bind(user)
showName();
exibir();