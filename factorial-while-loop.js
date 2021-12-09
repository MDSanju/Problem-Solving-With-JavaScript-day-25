function getFactorial(number) {
    let factorial = 1;
    let i = 1;
    while (i <= number) {
        factorial = factorial * i;
        i++;
    }
    return factorial;
}

const myNumber = getFactorial(7);
console.log(myNumber);



// reverse style
function getFactorial2(number2) {
    let factorial2 = 1;
    let i = number2;
    while (i >= 1) {
        factorial2 = factorial2 * i;
        i--;
    }
    return factorial2;
}

const myNumber2 = getFactorial2(8);
console.log(myNumber2);