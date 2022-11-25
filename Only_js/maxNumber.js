// write a function that take two numbers and returns the maximum of the two.
//Minha resolução

/*function returnMaximum(num1, num2){
    if (num1 > num2) return num1;
    else return num2;
    if (num1 === num2) return print('Eles são iguais');
}*/

//console.log(returnMaximum(3, 3));

//mosh resolução

let number = max(4,3);
console.log(number);
function max(a, b){
   // if(a > b) return a;
   // else return b;

   return (a > b) ? a : b;
}