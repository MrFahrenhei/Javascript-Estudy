const names = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];
const totalAlunos = names.length;
const sala1 = names.slice(0, totalAlunos/2);
const sala2 = names.slice(totalAlunos/2);
console.log(`Alunos da sala 1: ${sala1}`);
console.log(`Alunos da sala 2: ${sala2}`);

names.splice(1, 2, 'Rodrigous');

console.log(`Alunos novos: ${names}`)