interface NumberWithLogs {
    result: number
    logs: string[]
}

function square(x: number): NumberWithLogs {
    return {
        result: x * x,
        logs: [`O quadrado de ${x} é ${x * x}`]
    }
}

function addOne(x: number): NumberWithLogs{
    return{
        result: x + 1,
        logs: [`Soma 1 à ${x} para ter ${x + 1}`]
    }
}

function wrapWithIT(x: number): NumberWithLogs {
    return {
        result: x,
        logs: []
    }
}

function runWithIT(input: NumberWithLogs, transform: (_:number) => NumberWithLogs): NumberWithLogs{
    const newNumberWithIT = transform(input.result)
    return{
        result: newNumberWithIT.result,
        logs: input.logs.concat(newNumberWithIT.logs)
    }
}

const a = wrapWithIT(5);
const b = runWithIT(a, addOne);
const c = runWithIT(b, square)

console.log(a);
console.log(b);
console.log(c);
