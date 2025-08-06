const reverseString = function(str) {
    // let arr = [];
    // let result = "";

    // for (let i = str.length - 1; i > -1; i--) {
    //     arr.push(str[i]);
    // }
    
    // for (let char of arr) {
    //     result += char;
    // }

    // return result;
    return str.split("").reverse().join("");
};

console.log(reverseString("Hello World"));

// Do not edit below this line
module.exports = reverseString;
