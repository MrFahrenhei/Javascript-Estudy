import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

//const newUser2 = new User("Joaquim", "j@j.com", "17-02-2023")
//console.log(newUser2.displayInfo());

const newAdmin = new Admin("Marlon", "m@m.com", "03-29-2012");
console.log(newAdmin.name);
newAdmin.name = 'Anderson';
console.log(newAdmin.name);