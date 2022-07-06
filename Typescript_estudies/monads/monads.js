function square(x) {
    return {
        result: x * x,
        logs: ["O quadrado de ".concat(x, " \u00E9 ").concat(x * x)]
    };
}
function addOne(x) {
    return {
        result: x + 1,
        logs: ["Soma 1 \u00E0 ".concat(x, " para ter ").concat(x + 1)]
    };
}
function wrapWithIT(x) {
    return {
        result: x,
        logs: []
    };
}
function runWithIT(input, transform) {
    var newNumberWithIT = transform(input.result);
    return {
        result: newNumberWithIT.result,
        logs: input.logs.concat(newNumberWithIT.logs)
    };
}
var a = wrapWithIT(5);
var b = runWithIT(a, addOne);
var c = runWithIT(b, square);
console.log(a);
console.log(b);
console.log(c);
