const removeFromArray = function(arr, ...inputs) {
    return arr.filter(item => !inputs.includes(item))   
}

let arr = [1, 2, 3, 4]
console.log(removeFromArray(arr, 3));
console.log(removeFromArray(arr, 3, 2));
// Do not edit below this line
module.exports = removeFromArray;
