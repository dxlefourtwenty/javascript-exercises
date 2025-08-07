const leapYears = function(year) {
    let isLeapYear = false;

    if ((year % 4 == 0) && (year % 100 != 0)) 
        isLeapYear = true;
    if (year % 400 == 0)
        isLeapYear = true;

    return isLeapYear;
};

console.log(leapYears(1996));

// Do not edit below this line
module.exports = leapYears;
