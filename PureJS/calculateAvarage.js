// avarage = 70
// 1-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100:A
const marks = [80, 80, 50];

console.log(calculateGrade(marks));

function calculateGrade(marks){ 
    const media = calculateMedia(marks);

    if(media < 60) return "F";
    if(media < 70) return "D";
    if(media < 80) return "C";
    if(media < 90) return "B";
    return "A";
}

function calculateMedia(array){
    let sum = 0;
    for(let value of array)
        sum += value;
    return sum / array.length;
}