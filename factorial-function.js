// factorial in function
function getFactorial(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial = factorial * i;
    }
    return factorial;
}

var myNumber = 13;
var runFactorial = getFactorial(myNumber);
console.log(runFactorial);

var herNumber = 11;
var getReslt = getFactorial(herNumber);
console.log(getReslt);





// factorial reverse
function getFactorial2(number2) {
    let factorial2 = 1;
    for (let i = number2; i >= 1; i--) {
        factorial2 = factorial2 * i;
    }
    return factorial2;
}

const getReslt2 = getFactorial2(7);
console.log(getReslt2);