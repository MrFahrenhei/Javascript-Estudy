//return false values
//falsy values: null, '', false, 0, NaN
const array = [null, 0, 3, 1,'', 'olá', true];

console.log(countTruthy(array));
//minha solução
/*function countTruthy(array){
    return array.filter(array => array == true);
} */

//mosh solução
function countTruthy(array){
    let count = 0;
    for (let value of array)
        if (value)
            count++;
    return count;
}
//retornar quantos valores truthy tem no array;