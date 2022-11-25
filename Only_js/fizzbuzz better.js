// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 => input
// Not a number => 'not a number'

function findModOf(number, divisible){
    return number % divisible === 0;
}

function isFizzBuzz(number){
    if(findModOf(number, 3) && findModOf(number, 5)) {
        return "FizzBuzz";
    }
    if(findModOf(number, 3)){
        return "Fizz";
    }
    if(findModOf(number, 5)){
        return "Buzz";
    }else{
        return number;
    }
}

for (let i = 1; i <= 100; i++){
    console.log(isFizzBuzz(i));
}
