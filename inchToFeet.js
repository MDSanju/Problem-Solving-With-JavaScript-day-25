// convert inches to feets
function inchToFeet(inches) {
    var feet = inches / 12;
    return feet;
}

var myInches = 60;
var convertToFeet = inchToFeet(myInches);
console.log(convertToFeet);


// convert miles to kilometers
function mileToKm(mile) {
    var kilometer = mile * 1.60934;
    return kilometer;
}

var milesRunning = 12;
var convertToKm = mileToKm(milesRunning);
console.log(convertToKm);