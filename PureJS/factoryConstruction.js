// const address = {
//     street : 'rua tal',
//     city : "cascacity",
//     zipCode : "85805050"
// };

//Factory Function
// function createAddress(street,city,zipCode){
//     return{
//         street, city, zipCode
//     };
// }
//
// let address1 = createAddress('Erico','cascacity','85805050');
// console.log(address);

//Constructor Function
function Address(street, city, zipcode){
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
}

let address2 = new Address('Erico','cascacitys','85805050');
console.log(address2);