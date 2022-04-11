function pow(x: number, y: number){
    return Math.pow(x,y);
}
console.log(pow(2, 2));

function pow2(x: number, y: number): string{
    return Math.pow(x,y).toString();
}
console.log(pow2(2,2));

function pow3(x: number, y: number): void{
    Math.pow(x, y);
}
console.log(pow3(2,2));