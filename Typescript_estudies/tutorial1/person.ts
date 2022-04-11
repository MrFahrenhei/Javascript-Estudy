interface Person{
    name: string;
    last: string;
    [key: string]: any
}

const person: Person = {
    name: 'John',
    last: 'Doon'
}
const person1: Person = {
    name: 'Joao',
    last: 'das Neves'
}

// const person = {
//     name: 'John',
//     last: 'Doon'
// }

// const person2 = {
//     name: 'Joao',
//     last: 'da Silva',
//     fast: true
// }

console.log(person);
console.log(person1);