// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 => input
// Not a number => 'not a number'

const output = fizzBuzz('zero');
console.log(output);

function fizzBuzz(input){
    if(typeof input !== 'number'){ return "Not a number"; }
    return (input % 5 === 0 && input % 3 === 0)? "FizzBuzz" : (input % 5 === 0) ? "Buzz" : (input % 3 === 0) ? "Fizz": input;
}