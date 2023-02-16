const user = {
    name: "John",
    mail: "john@company.com",
    birth: "06/02/2001",
    role: "estudante",
    status: true,
    showInfos: function() {
        console.log(this.name, this.mail, this.birth, this.role, this.status)
    }
}

const admin = {
    name: "Marry",
    mail: "marry@company.com",
    birth: "06/02/2001",
    role: "admin",
    status: true,
    createCourse(){
        console.log("deu boa");
    } 
}

Object.setPrototypeOf(admin, user);
admin.createCourse();
admin.showInfos();