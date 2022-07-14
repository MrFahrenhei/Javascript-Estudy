const array = [432,543,234,646,465,34,56,765,435,234];
function find_max(nums){
    let max_num = Number.NEGATIVE_INFINITY;
    for(let num of nums){
        if(num > max_num){
           max_num=num;
        }
    }
    return max_num;
}
console.log(find_max(array));