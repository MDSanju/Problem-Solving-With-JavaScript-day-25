function isEven(even) {
    if (even % 2 == 0) {
        return true;
    }
    return false;
}

var number = 4;
var check = isEven(4);
console.log('YES this is an even number!', check);

var notEvenNum = 13;
var notCorrect = isEven(notCorrect);
console.log('NO this is not an even!', notCorrect);





// get odd number
function isOdd(odd) {
    if (odd % 2 != 0) {
        return true;
    }
    return false;
}

var oddDigit = 17;
var oddCheck = isOdd(oddDigit);
console.log('YES this is an odd number!', oddCheck);

var notOddNum = 20;
var notOddChecked = isOdd(notOddNum);
console.log('NO this is not an odd!', notOddChecked);