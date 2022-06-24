function add(number1: number, number2: number, showResult: boolean, phrase: string) {
    const result = number1 + number2;
    if (showResult) {
        console.log(phrase + result)
    } else {
        return result;
    }
}


const n1 = 5;
const n2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: "

const result = add(n1, n2, printResult, resultPhrase);
console.log(result);
