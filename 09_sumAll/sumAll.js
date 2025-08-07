const sumAll = function(x, y) {
    if (x > y) {
        let temp = x;
        x = y;
        y = temp;
    }
    if (x < 0 || y < 0)
        return "ERROR";
    if (x % 1 != 0 || y % 1 != 0)
        return "ERROR";
    if (typeof x === "string" || typeof y === "string")
        return "ERROR";

    let array = [];
    for (let i = x; i < y + 1; i++) {
        array.push(i);
    }
    let finalSum = array.reduce((total, currentValue) => {
        return total + currentValue;
    });

    return finalSum;
};

console.log(sumAll(1, 4));
// Do not edit below this line
module.exports = sumAll;
